import React from "react";

const UserTrading: React.FC = () => {
  return (
    <div className="userTrading">
      <h1 className="userTrading-title"> Info</h1>
      <div className="userTrading-info">
        <div className="text-gray ">
          Available balance :  <span className="text-success">1000 $</span> ,
          Phần Trăm Lãi :  <span className="text-success">50 %</span>
        </div>

        <div className="text-gray mg-t-15">
          Số lần chết Gà: <span className="text-error mg-l-5">1 </span> ,
          Tổng mất : <span className="text-error mg-l-5">31$</span>
        </div>
      </div>

      <h1 className="userTrading-title"> ToDay </h1>
      <div className="userTrading-info-to-day">
        <div className="text-gray mg-t-15">Vốn chơi ( Gà ) : <span className="text-primary">131$</span></div>

        <div className="text-gray mg-t-15">Số lần ngầm :
          <span className="text-error mg-l-5">1</span>/
          <span className="text-success">3</span>
        </div>

        <div className="text-gray mg-t-15">Thếp đang chạy :
          <span className="text-error mg-l-5">1</span>/
          <span className="text-success">6</span>
        </div>

        <div className="userTrading-bt-wrap mg-t-15">
          <button type="button" className="userTrading-bt-wrap__bt"> Start Trading</button>
        </div>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
      </div>
    </div >
  );
};

export default UserTrading;
