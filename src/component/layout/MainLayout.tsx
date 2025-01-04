import { Outlet } from "react-router";
import Header from "../../common/components/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="px-3 2xl:w-full mx-auto xxl:w-[80%]">
        <Outlet />
      </div>
      <div>Footer</div>
    </>
  );
};

export default MainLayout;
