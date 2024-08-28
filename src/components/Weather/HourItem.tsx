import getSameHour from "@/utils/getSameHour.ts";

import { HourlyWeatherType, NowWeatherType } from "@/types/weatherDataType.ts";

const HourItem = ({
  dt,
  weather,
  main,
}: HourlyWeatherType | NowWeatherType) => {
  const isSameHour = getSameHour(dt);

  return (
    <>
      <span className="text-xs opacity-85">
        {isSameHour
          ? "지금"
          : new Date(dt * 1000).toLocaleTimeString("ko-kr", {
              hour: "numeric",
            })}
      </span>
      <img
        width={50}
        height={50}
        src={`/src/assets/icons/${weather[0].icon}.png`}
        className="mx-auto"
        alt={weather[0].description}
      />
      <span>{main.temp.toFixed()}°</span>
    </>
  );
};

export default HourItem;
