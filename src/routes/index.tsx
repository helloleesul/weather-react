import { redirect, RouteObject } from "react-router-dom";
import App from "@/App.tsx";
import { ROUTES } from "@/routes/routes.ts";
import { WeatherPage } from "@/pages/Weather";
import { CalculatorPage } from "@/pages/Calculator";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: () => redirect(ROUTES.WEATHER),
      },
      {
        path: ROUTES.WEATHER,
        element: <WeatherPage />,
      },
      {
        path: ROUTES.CALCULATOR,
        element: <CalculatorPage />,
      },
    ],
  },
];

export default routes;
