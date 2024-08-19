import { redirect, RouteObject } from "react-router-dom";
import App from "@/App.tsx";
import { ROUTES } from "@/routes/routes.ts";

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
        element: <div>WEATHER</div>,
      },
      {
        path: ROUTES.CALCULATOR,
        element: <div>CALCULATOR</div>,
      },
    ],
  },
];

export default routes;
