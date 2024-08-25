import React from "react";
import WeatherBox from "@/components/Layout/WeatherBox.tsx";
import { WEATHER_IMAGE_MAP_BUTTONS } from "@/constants/elements.ts";
import useWeatherMap from "@/hooks/useWeatherMap.ts";

const WeatherMap = () => {
  const { setCurrentImageMapType, ref } = useWeatherMap();

  return (
    <WeatherBox
      title={WEATHER_IMAGE_MAP_BUTTONS.map((item, index) => (
        <React.Fragment key={item.value}>
          <button onClick={() => setCurrentImageMapType(item.value)}>
            {item.label}
          </button>
          {index < WEATHER_IMAGE_MAP_BUTTONS.length - 1 && (
            <span className="mx-2 font-extralight">|</span>
          )}
        </React.Fragment>
      ))}
    >
      <div className="w-full h-[384px] rounded-md mt-4" ref={ref} id="map" />
    </WeatherBox>
  );
};

export default WeatherMap;
