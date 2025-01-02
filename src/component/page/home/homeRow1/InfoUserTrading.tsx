import React from "react";

const InfoUserTrading: React.FC = () => {
  return (
    <div className="">
      <div className="text-2xl font-medium "> Info</div>
      <div className="">
        <div className="text-grayTextCT mt-3">
          Tổng Tài sản : <span className="text-green-500">1000 $</span> ,
        </div>

        <div className="text-grayTextCT mt-3">
          Lãi : <span className="text-green-500">50 %</span>
        </div>

        <div className="text-grayTextCT mt-3">
          Số lần chết Gà: <span className="text-red-500 mg-l-5">1 </span> 
        </div>

        <div className="text-grayTextCT mt-3">
          Tổng vào lệnh: <span className="text-white mg-l-5">1 </span> 
        </div>

        <div className="text-grayTextCT mt-3">
        Tổng thua  : <span className="text-red-500 mg-l-5">31$</span>
        </div>
      </div>
    </div>
  );
};

export default InfoUserTrading;
