import { WEATHER_API_KEY } from "@/constants/environment.ts";
import { HourlyWeatherType } from "@/types/weatherDataType.ts";

// 시간별 날씨
export const fetchHourWeather = async (city: string) => {
  const response = await fetch(
    `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${WEATHER_API_KEY}&lang=kr&units=metric&cnt=24`,
  );

  const data: { list: HourlyWeatherType[] } = await response.json();
  return data.list;
};
