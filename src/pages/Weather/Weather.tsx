import WeatherNow from "@/pages/Weather/components/WeatherNow.tsx";
import HourTemperature from "@/pages/Weather/components/HourTemperature.tsx";
import DayTemperature from "@/pages/Weather/components/DayTemperature.tsx";
import WeatherDetails from "@/pages/Weather/components/WeatherDetails.tsx";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import WeatherMap from "@/pages/Weather/components/WeatherMap.tsx";
import WeatherMapMarker from "@/pages/Weather/components/WeatherMapMarker.tsx";
import { GOOGLE_MAP_API_KEY } from "@/constants/environment.ts";

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <div>Loading...</div>;
    case Status.FAILURE:
      return <div>Error!</div>;
    case Status.SUCCESS:
      return (
        <WeatherMap>
          <WeatherMapMarker />
        </WeatherMap>
      );
  }
};

const Weather = () => {
  return (
    <div className="flex flex-col gap-4">
      <WeatherNow />
      <HourTemperature />
      <DayTemperature />
      <Wrapper apiKey={GOOGLE_MAP_API_KEY} render={render} />
      <WeatherDetails />
    </div>
  );
};

export default Weather;
