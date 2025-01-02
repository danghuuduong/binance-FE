import { Outlet } from "react-router";
import Header from "../../common/components/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="px-20">
        <Outlet />
      </div>
      <div>Footer</div>
    </>
  );
};

export default MainLayout;
