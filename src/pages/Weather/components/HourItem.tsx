import { HourlyWeatherType } from "@/types/weather.ts";

const HourItem = ({ dt_txt, weather, main }: HourlyWeatherType) => {
  return (
    <>
      <span className="text-xs opacity-85">
        {new Date(dt_txt).toLocaleTimeString("ko-kr", {
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
