import React, { createContext, useEffect, useState } from "react";
import { CITIES } from "@/constants/cities.ts";
import { WorkerContextType } from "@/types/weatherWorkerType.ts";

export const WorkerContext = createContext<WorkerContextType | null>(null);

export const WorkerProvider = ({ children }: { children: React.ReactNode }) => {
  const [weather, setWeather] = useState({
    now: null,
    hour: [],
    day: [],
  });
  const [worker, setWorker] = useState<Worker | null>(null);

  useEffect(() => {
    const newWorker = new Worker(
      new URL("../utils/weatherWorker.ts", import.meta.url),
      { type: "module" },
    );

    newWorker.postMessage(CITIES);
    newWorker.onmessage = (event: MessageEvent) => {
      console.log(event.data.weather.now.name);
      setWeather(event.data.weather);
    };

    setWorker(newWorker);

    return () => {
      if (worker) {
        worker.terminate();
      }
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WorkerContext.Provider value={{ weather, worker }}>
      {children}
    </WorkerContext.Provider>
  );
};
