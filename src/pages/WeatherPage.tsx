import WeatherNow from "@/components/Weather/WeatherNow.tsx";
import HourTemperature from "@/components/Weather/HourTemperature.tsx";
import DayTemperature from "@/components/Weather/DayTemperature.tsx";
import WeatherDetails from "@/components/Weather/WeatherDetails.tsx";
import WeatherMap from "@/components/Weather/WeatherMap.tsx";

import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { GOOGLE_MAP_API_KEY } from "@/constants/environment.ts";
import { useWeatherStore } from "@/stores/useWeatherStore.ts";
import LoadingPage from "@/pages/LoadingPage.tsx";

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <></>;
    case Status.FAILURE:
      return <></>;
    case Status.SUCCESS:
      return <WeatherMap />;
  }
};

const WeatherPage = () => {
  const weather = useWeatherStore((state) => state.weather.now);

  if (!weather) return <LoadingPage />;

  return (
    <div className="flex flex-col gap-4">
      <WeatherNow />
      <HourTemperature />
      <DayTemperature />
      <Wrapper
        apiKey={GOOGLE_MAP_API_KEY}
        render={render}
        libraries={["marker"]}
      />
      <WeatherDetails />
    </div>
  );
};

export default WeatherPage;
