import { WEATHER_API_KEY } from "@/constants/environment.ts";
import {
  DayWeatherType,
  HourlyWeatherType,
  NowWeatherType,
} from "@/types/weatherDataType.ts";

// 현재 날씨
const fetchNowWeather = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric&lang=kr`,
  );

  const data: NowWeatherType = await response.json();
  return data;
};

// 시간별 날씨
const fetchHourWeather = async (city: string) => {
  const response = await fetch(
    `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${WEATHER_API_KEY}&lang=kr&units=metric&cnt=24`,
  );

  const data: { list: HourlyWeatherType[] } = await response.json();
  return data.list;
};

// 일별 날씨
const fetchDayWeather = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${WEATHER_API_KEY}&lang=kr&units=metric&cnt=7`,
  );

  const data: { list: DayWeatherType[] } = await response.json();
  return data.list;
};

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
