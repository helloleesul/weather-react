import React, { useEffect, useRef, useState } from "react";
import WeatherBox from "@/components/WeatherBox";
import { GOOGLE_MAP_ID, WEATHER_API_KEY } from "@/constants/environment.ts";

const WeatherMap = ({
  children,
}: {
  children:
    | React.ReactElement<{ map?: google.maps.Map }>
    | React.ReactElement<{ map?: google.maps.Map }>[];
}) => {
  const [map, setMap] = useState<google.maps.Map>();
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const center = { lat: 37.5683, lng: 126.9778 };

  useEffect(() => {
    if (ref.current && !map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center,
        zoom: 9,
        mapId: GOOGLE_MAP_ID,
        disableDefaultUI: true,
        clickableIcons: false,
        gestureHandling: "greedy",
      });

      const rainfallImage = new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
          return `https://maps.openweathermap.org/maps/2.0/weather/PAR0/${zoom}/${coord.x}/${coord.y}?opacity=0.8&fill_bound=true&appid=${WEATHER_API_KEY}`;
        },
        tileSize: new google.maps.Size(256, 256),
        maxZoom: 9,
        minZoom: 0,
      });

      newMap.overlayMapTypes.insertAt(0, rainfallImage);
      setMap(newMap);
    }
  }, [ref, map, center]);

  return (
    <WeatherBox title="강수량">
      <div className="w-full h-[384px] rounded-md mt-4" ref={ref} id="map" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </WeatherBox>
  );
};

export default WeatherMap;
