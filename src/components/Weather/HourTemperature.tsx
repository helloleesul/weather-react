import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import WeatherBox from "@/components/Layout/WeatherBox.tsx";
import HourItem from "@/components/Weather/HourItem.tsx";
import { HourlyWeatherType } from "@/types/weatherDataType.ts";
import { useWeatherStore } from "@/stores/useWeatherStore.ts";

const HourTemperature = () => {
  const hourWeather = useWeatherStore((state) => state.weather.hour);
  const nowWeather = useWeatherStore((state) => state.weather.now);

  if (!nowWeather || !hourWeather?.length) return;

  return (
    <WeatherBox
      title={
        <>
          {nowWeather.wind.gust && "돌풍의 "}풍속은 최대{" "}
          {nowWeather.wind.gust || nowWeather.wind.speed}m/s 입니다.
        </>
      }
      underline
    >
      <Swiper slidesPerView={6} spaceBetween={0} modules={[Pagination]}>
        <SwiperSlide className="text-center">
          <HourItem {...nowWeather} />
        </SwiperSlide>
        {hourWeather.map((item: HourlyWeatherType) => (
          <SwiperSlide key={item.dt} className="text-center">
            <HourItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </WeatherBox>
  );
};

export default HourTemperature;
