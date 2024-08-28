import getSameDay from "@/utils/getSameDay.ts";

import { DayWeatherType } from "@/types/weatherDataType.ts";

const DayItem = ({ dt, weather, temp }: DayWeatherType) => {
  const isSameDay = getSameDay(dt);

  return (
    <div className="flex items-center justify-between px-1">
      <span>
        {isSameDay
          ? "오늘"
          : new Date(dt * 1000).toLocaleDateString("ko-kr", {
              weekday: "short",
            })}
      </span>
      <img
        width={50}
        height={50}
        src={`/src/assets/icons/${weather[0].icon}.png`}
        alt={weather[0].description}
      />
      <div className="flex gap-3">
        <p>
          <span className="opacity-80">최고:</span> {temp.max.toFixed()}°
        </p>
        <p>
          <span className="opacity-80">최저:</span> {temp.min.toFixed()}°
        </p>
      </div>
    </div>
  );
};

export default DayItem;
