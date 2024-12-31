import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./header.css";
import { redirect, useNavigate } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Home",
    key: "/",
    icon: <MailOutlined />,
  },
  {
    label: "lịch sử chơi",
    key: "/candlestickHistory",
    icon: <MailOutlined />,
  },
  {
    label: "Liên hệ",
    key: "contact",
    icon: <MailOutlined />,
    disabled: true,
  },
  {
    label: "Avatart",
    key: "profile",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
];

const Header = (): JSX.Element => {
  const [current, setCurrent] = useState("/");
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(`${e.key}`);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
