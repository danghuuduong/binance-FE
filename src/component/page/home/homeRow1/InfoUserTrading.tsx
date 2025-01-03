import React from "react";

const InfoUserTrading: React.FC = () => {
  return (
    <div className="">
      <div className="text-2xl font-medium "> Thông tin ủa bạn</div>
      <div className="">
        <div className="text-grayTextCT mt-3">
          Name : <span className="text-green-500">Đặng hữu DƯơng</span> ,
        </div>
        <div className="text-grayTextCT mt-3">
          USD : <span className="text-green-500">1031 $</span> ,
        </div>

        <div className="text-grayTextCT mt-3">
          Profit : <span className="text-green-500">62 %</span>
        </div>
        <span className="text-grayTextCT">
          -------------------------------------------------------------
        </span>

        <div className="text-grayTextCT mt-3">
          Số lần chết Gà: <span className="text-red-500 mg-l-5">1 </span>
        </div>

        <div className="text-grayTextCT mt-3">
          Tổng vào lệnh: <span className="text-white mg-l-5">1 </span>
        </div>

        <div className="text-grayTextCT mt-3">
          Tổng thua : <span className="text-red-500 mg-l-5">31$</span>
        </div>
      </div>
    </div>
  );
};

export default InfoUserTrading;
