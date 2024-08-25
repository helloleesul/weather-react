import WeatherBox from "@/components/Layout/WeatherBox.tsx";
import { DayWeatherType } from "@/types/weatherDataType.ts";
import DayItem from "@/components/Weather/DayItem.tsx";
import { useWeatherStore } from "@/stores/useWeatherStore.ts";

const DayTemperature = () => {
  const dayWeather = useWeatherStore((state) => state.weather.day);

  if (!dayWeather?.length) return;

  return (
    <WeatherBox title="7일간의 일기예보">
      <ul className="mt-3">
        {dayWeather.map((item: DayWeatherType) => (
          <li key={item.dt}>
            <hr className="h-px bg-white bg-opacity-30 border-0" />
            <DayItem {...item} />
          </li>
        ))}
      </ul>
    </WeatherBox>
  );
};

export default DayTemperature;
