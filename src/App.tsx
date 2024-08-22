import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import { ROUTES } from "@/routes/routes.ts";
import { WorkerProvider } from "@/contexts/WorkerContext.tsx";

const backgroundStyle = {
  [ROUTES.WEATHER]: "bg-[#6a92c4]",
  [ROUTES.CALCULATOR]: "bg-black",
};
const positionStyle = {
  [ROUTES.WEATHER]: "",
  [ROUTES.CALCULATOR]: "flex-1 flex items-center",
};

function App() {
  const { pathname } = useLocation();

  return (
    <div className={`app-container ${backgroundStyle[pathname]}`}>
      <Header />
      <main className={positionStyle[pathname]}>
        <WorkerProvider>
          <Outlet />
        </WorkerProvider>
      </main>
    </div>
  );
}

export default App;
