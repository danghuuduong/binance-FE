import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <div>Header</div>
      <Outlet /> {/* Đây là nơi các route con sẽ được hiển thị */}
      <div>Footer</div>
    </>
  );
};

export default  MainLayout