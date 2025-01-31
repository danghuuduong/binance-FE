import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import MainLayout from "./component/layout/MainLayout.tsx";
import "././common/common.css";
import "./index.css";
import CandlestickHistory from "./component/page/candlesHistory/CandlestickHistory.tsx";

import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import { ContextWrap } from "./context/FoodContext.tsx";


const router = createBrowserRouter([
  {
    element: <MainLayout />,
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
  {
    path: "/ss",
    element: <div>ss</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextWrap>
      <RouterProvider router={router} />
    </ContextWrap>
  </StrictMode>
);
