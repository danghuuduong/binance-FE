import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./component/layout/MainLayout.tsx";
import "././common/common.css";
import "./index.css";
import CandlestickHistory from "./component/page/candlesHistory/CandlestickHistory.tsx";

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
