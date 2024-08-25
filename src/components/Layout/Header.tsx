import Nav from "@/components/Layout/Nav.tsx";
import { useWeatherStore } from "@/stores/useWeatherStore.ts";
import { Pause, Play } from "lucide-react";

const Header = () => {
  const { startWorker, stopWorker } = useWeatherStore();
  const worker = useWeatherStore((state) => state.worker);
  const nowCity = useWeatherStore((state) => state.weather.now?.name);

  return (
    <header className="sticky top-4 z-10 flex justify-between">
      <Nav />
      <div className="flex justify-between items-center gap-3">
        <p className="text-white">{nowCity}</p>
        <button
          onClick={worker ? stopWorker : startWorker}
          className="text-white"
        >
          {worker ? <Pause fill="white" /> : <Play fill="white" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
