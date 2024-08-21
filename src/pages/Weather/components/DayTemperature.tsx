import WeatherBox from "@/components/WeatherBox";
import { DAY_TEST_LIST } from "@/constants/mockData.ts";
import { DayWeatherType } from "@/types/weather.ts";
import DayItem from "@/pages/Weather/components/DayItem.tsx";

const DayTemperature = () => {
  return (
    <WeatherBox title="10일간의 일기예보">
      <ul className="mt-3">
        {DAY_TEST_LIST.map((item: DayWeatherType) => (
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
