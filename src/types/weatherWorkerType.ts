import {
  DayWeatherType,
  HourlyWeatherType,
  NowWeatherType,
} from "@/types/weatherDataType.ts";

export interface WorkerContextType {
  weather: {
    now: NowWeatherType | null;
    hour: HourlyWeatherType[] | [];
    day: DayWeatherType[] | [];
  };
  worker: Worker | null;
}
