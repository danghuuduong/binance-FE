import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import MainLayout from "./component/layout/MainLayout.tsx";
import "././common/common.css";
import "./index.css";

import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import { ContextWrap } from "./context/FoodContext.tsx";
import OderHistory from "./component/page/oderHistory/oderHistory.tsx";
import EmaCrossHistory from "./component/page/emaCrossHistory/EmaCrossHistory.tsx";
import Register from "./component/auth/register/Register.tsx";
import Login from "./component/auth/login/Login.tsx";


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
        element: <OderHistory />,
      },
      {
        path: "/ema",
        element:
          <div className="bg-grayCT rounded-lg mt-10 p-4 px-8">
            <EmaCrossHistory />
          </div>
      },

      {
        path: "/register",
        element: <Register />
      },

      {
        path: "/login",
        element: <Login />
      },


    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextWrap>
      <RouterProvider router={router} />
    </ContextWrap>
  </StrictMode>
);
