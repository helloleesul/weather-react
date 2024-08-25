import { WEATHER_API_KEY } from "@/constants/environment.ts";
import { DayWeatherType } from "@/types/weatherDataType.ts";

// 일별 날씨
export const fetchDayWeather = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${WEATHER_API_KEY}&lang=kr&units=metric&cnt=7`,
  );

  const data: { list: DayWeatherType[] } = await response.json();
  return data.list;
};
