import React from "react";

const ToDayTrading: React.FC = () => {
  return (
    <div>
      <div className="text-2xl font-medium "> ToDay</div>
      <div>
        <div className="text-grayTextCT mt-3">
          Vốn chơi ( Gà ) : <span className="text-primary">131$</span>
        </div>

        <div className="text-grayTextCT mt-3">
          Số lần ngầm :<span className="text-red-500 mg-l-5">1</span>/
          <span className="text-green-500">3</span>
        </div>

        <div className="text-grayTextCT mg-t-15">
          Thếp đang chạy :<span className="text-red-500 mg-l-5">1</span>/
          <span className="text-green-500">6</span>
        </div>

        <div className="text-grayTextCT mg-t-15">
          Số lần vào lệnh hôm nay : <span className="text-white mg-l-5">1</span>
        </div>
      </div>

      <div >
        <button
          type="button"
          className="mt-4 
        bg-yellowCT
        text-arrayInButtonYellow
        hover:bg-yellow-200 
          hover:scale-105
          duration-300
          ease-in-out
          font-medium 
          text-sm
          rounded-lg
          px-5 py-2.5 me-2 mb-2 
          focus:outline-none"
        >
          Start Trading
        </button>
      </div>
    </div>
  );
};

export default ToDayTrading;
