import WeatherBox from "@/components/WeatherBox";
import { HOUR_TEST_LIST } from "@/constants/mockData.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HourItem from "@/pages/Weather/components/HourItem.tsx";
import { HourlyWeatherType } from "@/types/weather.ts";

const HourTemperature = () => {
  return (
    <WeatherBox title={<>돌풍의 풍속은 최대 {4}m/s 입니다.</>} underline>
      <Swiper slidesPerView={6} spaceBetween={0} modules={[Pagination]}>
        {HOUR_TEST_LIST.map((item: HourlyWeatherType) => (
          <SwiperSlide key={item.dt} className="text-center">
            <HourItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </WeatherBox>
  );
};

export default HourTemperature;
