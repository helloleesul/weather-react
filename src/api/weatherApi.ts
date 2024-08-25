import { fetchNowWeather } from "@/api/fetchNowWeather.ts";
import { fetchHourWeather } from "@/api/fetchHourWeather.ts";
import { fetchDayWeather } from "@/api/fetchDayWeather.ts";

export const fetchWeatherData = async (city: string) => {
  const [nowWeather, hourWeather, dayWeather] = await Promise.all([
    fetchNowWeather(city),
    fetchHourWeather(city),
    fetchDayWeather(city),
  ]);

  return {
    now: nowWeather,
    hour: hourWeather,
    day: dayWeather,
  };
};
