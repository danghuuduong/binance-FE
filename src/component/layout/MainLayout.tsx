import { Outlet } from "react-router";
import Header from "../../common/components/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Đây là nơi các route con sẽ được hiển thị */}
      <div>Footer</div>
    </>
  );
};

export default  MainLayout