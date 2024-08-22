import WeatherBox from "@/components/WeatherBox";
import useWorker from "@/hooks/useWorker.ts";

const WeatherDetails = () => {
  const worker = useWorker();
  const nowWeather = worker?.weather?.now;

  if (!nowWeather) {
    return <div>Loading...</div>;
  }

  const { main, clouds, wind } = nowWeather;

  const dataList = [
    {
      title: "습도",
      data: main.humidity,
      unit: "%",
    },
    {
      title: "구름",
      data: clouds.all,
      unit: "%",
    },
    {
      title: "바람 속도",
      data: wind.speed,
      unit: "m/s",
    },
    {
      title: "기압",
      data: main.grnd_level.toLocaleString(),
      unit: "hPa",
    },
  ];

  return (
    <div className="grid grid-cols-2 auto-rows-[minmax(200px,_2fr)] gap-4">
      {dataList.map((item, index) => (
        <WeatherBox title={item.title} key={index}>
          <div className="flex flex-col h-full justify-center -mt-5">
            <p className="text-4xl">
              {item.data}
              <span className="font-extralight">{item.unit}</span>
            </p>
          </div>
        </WeatherBox>
      ))}
    </div>
  );
};

export default WeatherDetails;
