import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@/routes";
import LoadingPage from "@/pages/LoadingPage.tsx";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
