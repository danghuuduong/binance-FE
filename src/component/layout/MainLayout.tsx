import { Outlet } from "react-router";
import Header from "../../common/components/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="2xl:w-full mx-auto">
        <Outlet />
      </div>
      <div className="h-[64px] flex items-center justify-center bg-gray-800 text-white">
        Footer
      </div>
    </>
  );
};

export default MainLayout;
