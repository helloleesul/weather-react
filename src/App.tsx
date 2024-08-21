import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import { ROUTES } from "@/routes/routes.ts";

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
        <Outlet />
      </main>
    </div>
  );
}

export default App;
