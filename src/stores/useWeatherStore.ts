import { create } from "zustand";
import {
  DayWeatherType,
  HourlyWeatherType,
  NowWeatherType,
} from "@/types/weatherDataType.ts";

interface WeatherState {
  startWorker: () => void;
  stopWorker: () => void;
  cityIndex: number;
  weather: {
    now: NowWeatherType | null;
    hour: HourlyWeatherType[] | [];
    day: DayWeatherType[] | [];
  };
  worker: Worker | null;
}

export const useWeatherStore = create<WeatherState>()((set) => {
  let worker: Worker | null = null;

  return {
    cityIndex: 0,
    weather: {
      now: null,
      hour: [],
      day: [],
    },
    worker: null,

    startWorker: () => {
      // 이미 실행 중인 워커 인스턴스가 있다면 중지
      if (worker) {
        worker.postMessage("STOP");
        worker.terminate();
        worker = null;

        // 상태에서 워커를 초기화
        set((state) => ({
          ...state,
          worker: null,
        }));
      }

      // 새 워커 생성
      worker = new Worker(
        new URL("../utils/weatherWorker.ts", import.meta.url),
        { type: "module" },
      );

      // 새로 생성된 워커를 전역 상태로 저장
      set((state) => ({
        ...state,
        worker,
      }));

      // 새로 생성된 워커가 존재하면, 도시 인덱스를 워커에 전달
      set((state) => {
        if (state.worker) {
          state.worker.postMessage({ cityIndex: state.cityIndex });
        }
        return state;
      });

      // 워커로부터 메세지(받은 날씨 데이터와 도시 인덱스)를 전역 상태로 저장
      worker.onmessage = (event: MessageEvent) => {
        set((state) => ({
          ...state,
          weather: event.data.weather,
          cityIndex: event.data.cityIndex,
        }));
      };
    },

    stopWorker: () => {
      if (worker) {
        worker.postMessage("STOP");
        worker.terminate();
        worker = null;

        set((state) => ({
          ...state,
          worker: null,
        }));
      }
    },
  };
});
