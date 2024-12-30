import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import CandlestickHistory from "./component/CandlestickHistory.tsx";
import MainLayout from "./component/layout/MainLayout.tsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <div>errorElement 404</div>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/candlestickHistory",
        element: <CandlestickHistory />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
