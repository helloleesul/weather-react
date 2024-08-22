import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import { ROUTES } from "@/routes/routes.ts";
import { WorkerProvider } from "@/contexts/WorkerContext.tsx";

const backgroundColors = {
  [ROUTES.WEATHER]: "bg-[#6a92c4]",
  [ROUTES.CALCULATOR]: "bg-black",
};

function App() {
  const { pathname } = useLocation();

  return (
    <div className={`app-container ${backgroundColors[pathname]}`}>
      <Header />
      <main>
        <WorkerProvider>
          <Outlet />
        </WorkerProvider>
      </main>
    </div>
  );
}

export default App;
