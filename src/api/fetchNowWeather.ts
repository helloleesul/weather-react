import { NowWeatherType } from "@/types/weatherDataType.ts";
import { WEATHER_API_KEY } from "@/constants/environment.ts";

// 현재 날씨
export const fetchNowWeather = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric&lang=kr`,
  );

  const data: NowWeatherType = await response.json();
  return data;
};
