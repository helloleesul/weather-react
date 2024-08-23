import { useEffect, useRef, useState } from "react";
import WeatherBox from "@/components/WeatherBox";
import { GOOGLE_MAP_ID, WEATHER_API_KEY } from "@/constants/environment.ts";
import useWorker from "@/hooks/useWorker.ts";
import { createMarker } from "@/utils/createMarker.ts";

const WeatherMap = () => {
  const [map, setMap] = useState<google.maps.Map>();
  const [marker, setMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  const worker = useWorker();
  const workerCoord = worker?.weather?.now?.coord;
  const workerTemp = worker?.weather?.now?.main.temp;

  useEffect(() => {
    if (ref.current && workerCoord && workerTemp) {
      const center = { lat: workerCoord.lat, lng: workerCoord.lon };
      if (!map) {
        const newMap = new window.google.maps.Map(ref.current, {
          center,
          zoom: 9,
          mapId: GOOGLE_MAP_ID,
          disableDefaultUI: true,
          clickableIcons: false,
          gestureHandling: "greedy",
        });

        const newMarker = createMarker(workerTemp, center, newMap);

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
        setMarker(newMarker);
      } else {
        map.setCenter(center);

        if (marker) {
          setMarker((prev) => (prev!.map = null));
        }

        const newMarker = createMarker(workerTemp, center, map);

        setMarker(newMarker);
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, map, workerCoord, workerTemp]);

  return (
    <WeatherBox title="강수량">
      <div className="w-full h-[384px] rounded-md mt-4" ref={ref} id="map" />
    </WeatherBox>
  );
};

export default WeatherMap;
