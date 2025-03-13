import React, { useState } from "react";
import "./header.css";
import { useNavigate } from "react-router";

const items = [
  {
    label: "Home",
    key: "/",
  },
  {
    label: "Lịch sử giao dịch",
    key: "/candlestickHistory",
  },
  {
    label: "Lịch sử Tool cho lệnh",
    key: "/ema",
  },
  {
    label: "Liên hệ",
    key: "contact",
    disabled: true,
  },
];

const Header = (): JSX.Element => {
  const [current, setCurrent] = useState("/");
  const navigate = useNavigate();

  const onClick = (key: string, isDisabled?: boolean) => {
    if (!isDisabled) {
      navigate(key);
      setCurrent(key);
    }
  };

  return (
    <nav className="border-gray-200 bg-[#181A20]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://pngimg.com/d/bitcoin_PNG7.png"
            className="h-8"
            alt="..."
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellowCT">
            Tool Binance
          </span>
        </div>

       

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {items.map((it) => {
              const isActive = current === it.key ? "text-yellowCT" : "";
              return (
                <li key={it.key}>
                  <a
                    className={`block py-2 px-3  bg-blue-700 rounded md:bg-transparent ${
                      it.disabled ? "text-grayTextCT" : isActive
                    } md:p-0  cursor-pointer`}
                    aria-current="page"
                    onClick={() => onClick(it.key, it.disabled)} 
                  >
                    {it.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* <div className="flex items-center md:order-2 space-x-3 md:space-x-0 ">
            <img
              className="w-8 h-8 rounded-full"
              src="https://inkythuatso.com/uploads/thumbnails/800/2023/03/6-anh-dai-dien-trang-inkythuatso-03-15-26-36.jpg"
              alt="avatar"
            />
        </div> */}

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 ">
          <div className="mr-5 cursor-pointer"   onClick={() => onClick("/login")} > Đăng nhập</div>
          <div className="cursor-pointer"   onClick={() => onClick("/register")} > Đăng Ký</div>
        </div>

      </div>
    </nav>
  );
};

export default Header;

