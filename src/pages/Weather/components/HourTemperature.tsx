import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import WeatherBox from "@/components/WeatherBox";
import HourItem from "@/pages/Weather/components/HourItem.tsx";
import { HourlyWeatherType } from "@/types/weatherDataType.ts";
import useWorker from "@/hooks/useWorker.ts";

const HourTemperature = () => {
  const worker = useWorker();
  const hourWeather = worker?.weather?.hour;

  return (
    <WeatherBox title={""}>
      <Swiper slidesPerView={6} spaceBetween={0} modules={[Pagination]}>
        {hourWeather?.map((item: HourlyWeatherType) => (
          <SwiperSlide key={item.dt} className="text-center">
            <HourItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </WeatherBox>
  );
};

export default HourTemperature;
