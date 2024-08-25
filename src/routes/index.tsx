import { lazy } from "react";
import { redirect, RouteObject } from "react-router-dom";
import { ROUTES } from "@/routes/routes.ts";
import App from "@/App.tsx";
import ErrorPage from "@/pages/ErrorPage.tsx";
const WeatherPage = lazy(() => import("@/pages/WeatherPage.tsx"));
const CalculatorPage = lazy(() => import("@/pages/CalculatorPage.tsx"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
