import { useEffect, useRef, useState } from "react";
import { WEATHER_IMAGE_MAP_BUTTONS } from "@/constants/elements.ts";
import { useWeatherStore } from "@/stores/useWeatherStore.ts";
import { GOOGLE_MAP_ID, WEATHER_API_KEY } from "@/constants/environment.ts";

export default function useWeatherMap() {
  // 지도 이미지맵
  const [currentImageMapType, setCurrentImageMapType] = useState(
    WEATHER_IMAGE_MAP_BUTTONS[0].value,
  );
  // 지도
  const [map, setMap] = useState<google.maps.Map>();
  // 마커
  const [marker, setMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  // 지도 요소
  const ref = useRef<HTMLDivElement>(null);

  const nowWeather = useWeatherStore((state) => state.weather.now);
  const nowPosition = nowWeather?.coord;
  const nowTemp = nowWeather?.main.temp;

  // 지도 생성 후, 현재 위치가 바뀔 때마다 지도 위치 맞추기
  useEffect(() => {
    if (!ref.current || !nowPosition) return;

    if (!map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center: { lat: nowPosition.lat, lng: nowPosition.lon },
        zoom: 9,
        mapId: GOOGLE_MAP_ID,
        disableDefaultUI: true,
        clickableIcons: false,
        gestureHandling: "greedy",
      });
      setMap(newMap);
      return;
    }
    map.setCenter({ lat: nowPosition.lat, lng: nowPosition.lon });
  }, [ref, map, nowPosition]);

  // 현재 위치가 바뀔 때마다 마커 위치 맞추기
  useEffect(() => {
    if (!nowPosition) return;

    const pinOptions = new google.maps.marker.PinElement({
      scale: 1.5,
      background: "#3774af",
      borderColor: "#ffffff",
      glyph: `${nowTemp?.toFixed()}°`,
    });

    const newMarker = new google.maps.marker.AdvancedMarkerElement({
      position: { lat: nowPosition.lat, lng: nowPosition.lon },
      map,
      content: pinOptions.element,
      title: "나의 위치",
    });
    setMarker(newMarker);
  }, [map, nowPosition, nowTemp]);

  // 이전 마커 초기화
  useEffect(() => {
    return () => {
      if (marker) {
        marker.map = null;
      }
    };
  }, [marker]);

  // 현재 지도 이미지맵 값이 바뀔 때마다 이미지 맵핑
  useEffect(() => {
    if (!map) return;
    map.overlayMapTypes.clear();

    const newImage = new google.maps.ImageMapType({
      getTileUrl: function (coord, zoom) {
        return `https://maps.openweathermap.org/maps/2.0/weather/${currentImageMapType}/${zoom}/${coord.x}/${coord.y}?opacity=${currentImageMapType === "TA2" ? "0.6" : "0.9"}&fill_bound=true&appid=${WEATHER_API_KEY}`;
      },
      tileSize: new google.maps.Size(256, 256),
    });

    map.overlayMapTypes.insertAt(0, newImage);
  }, [currentImageMapType, map]);

  return { setCurrentImageMapType, ref };
}
