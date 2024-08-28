import { lazy } from "react";
import { redirect, RouteObject } from "react-router-dom";

import App from "@/App.tsx";

import ErrorPage from "@/pages/ErrorPage.tsx";

import { ROUTES } from "@/routes/routes.ts";

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
