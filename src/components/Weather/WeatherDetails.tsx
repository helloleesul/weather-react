import getWindDirectionLabel from "@/utils/getWindDirectionLabel.ts";

import WeatherBox from "@/components/Layout/WeatherBox.tsx";

import { useWeatherStore } from "@/stores/useWeatherStore.ts";

const WeatherDetails = () => {
  const nowWeather = useWeatherStore((state) => state.weather.now);

  if (!nowWeather) return;

  const { main, clouds, wind } = nowWeather;

  const dataList = [
    {
      title: "습도",
      data: main.humidity,
      unit: "%",
    },
    {
      title: "체감 온도",
      data: main.feels_like.toFixed(1),
      unit: "°",
    },
    {
      title: "구름",
      data: clouds.all,
      unit: "%",
    },
    {
      title: "기압",
      data: main.grnd_level.toLocaleString(),
      unit: "hPa",
    },
    {
      title: "바람 속도",
      data: wind.speed,
      unit: "m/s",
    },
    {
      title: "바람 방향",
      data: getWindDirectionLabel(wind.deg),
    },
  ];

  return (
    <div className="grid grid-cols-2 auto-rows-[minmax(200px,_2fr)] gap-4">
      {dataList.map((item, index) => (
        <WeatherBox title={item.title} key={index}>
          <div className="flex flex-col h-full justify-center -mt-5 relative">
            <p className="text-4xl">
              {item.data}
              <span className="font-extralight">{item.unit}</span>
            </p>
            {item.data === wind.speed && (
              <>
                {nowWeather.wind.gust && (
                  <p className="font-light absolute bottom-0">
                    강풍: {nowWeather.wind.gust}
                    {item.unit}
                  </p>
                )}
              </>
            )}
          </div>
        </WeatherBox>
      ))}
    </div>
  );
};

export default WeatherDetails;
