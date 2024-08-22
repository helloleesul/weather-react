import useWorker from "@/hooks/useWorker.ts";

const WeatherNow = () => {
  const worker = useWorker();
  const nowWeather = worker?.weather?.now;

  if (!nowWeather) {
    return <div>Loading...</div>;
  }

  const { name, main, weather } = nowWeather;

  return (
    <section className="text-white">
      <h1 className="flex flex-col items-center justify-center gap-4 mb-3">
        <span className="text-4xl font-light">{name}</span>
        <span className="text-8xl">{main.temp_min.toFixed()}°</span>
        <span className="text-3xl font-light">{weather[0].description}</span>
      </h1>
      <div className="text-lg flex items-center justify-center gap-2">
        <p>최고: {main.temp_max.toFixed(1)}°</p>
        <span>|</span>
        <p>최저: {main.temp_min.toFixed(1)}°</p>
      </div>
    </section>
  );
};

export default WeatherNow;
