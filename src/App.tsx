import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "@/components/Layout/Header.tsx";

import { ROUTES } from "@/routes/routes.ts";

import { useWeatherStore } from "@/stores/useWeatherStore.ts";

const backgroundStyle = {
  [ROUTES.WEATHER]: "bg-[#6a92c4]",
  [ROUTES.CALCULATOR]: "bg-black relative",
};
const positionStyle = {
  [ROUTES.WEATHER]: "",
  [ROUTES.CALCULATOR]: "flex-1 flex items-center",
};

function App() {
  const { pathname } = useLocation();
  const { startWorker } = useWeatherStore();

  useEffect(() => {
    startWorker();
  }, [startWorker]);

  return (
    <div className={`app-container ${backgroundStyle[pathname]}`}>
      <Header />
      <main className={positionStyle[pathname]}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
