import WeatherBox from "@/components/WeatherBox";
import { DayWeatherType } from "@/types/weatherDataType.ts";
import DayItem from "@/pages/Weather/components/DayItem.tsx";
import useWorker from "@/hooks/useWorker.ts";

const DayTemperature = () => {
  const worker = useWorker();
  const dayWeather = worker?.weather?.day;

  return (
    <WeatherBox title="7일간의 일기예보">
      <ul className="mt-3">
        {dayWeather?.map((item: DayWeatherType) => (
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
