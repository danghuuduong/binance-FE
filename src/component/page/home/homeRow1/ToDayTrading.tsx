import React, { useEffect, useState } from "react";
import Select from "../../../../common/components/select/select";
import Modal from "../../../../common/components/modal/Modal";

const optionsChicken: string[] = ["10", "20", "30"];

const ToDayTrading: React.FC = () => {
  const [usd, setUsd] = useState<string>("-");
  const chickenType = localStorage.getItem("chickenType") || "10";
  const [chicken, setChicken] = useState<string>(chickenType);
  const [isActiveTrade, setIsActiveTrade] = useState<boolean>(false);

  const percentUSDT = (Number(usd) / 100) * Number(chickenType) || 0;

  useEffect(() => {
    // call api getthongtin
    setUsd("1000");
  }, []);

  const handleChange = (chicken: string) => {
    localStorage.setItem("chickenType", chicken);
    setChicken(chicken);
  };

  return (
    <div>
      <div className="text-2xl font-medium "> Bắt Đầu Trading tool</div>
      <div>
        <div className="text-grayTextCT mt-3">
          USD <span className="text-primary">{usd} $</span>
        </div>

        <div className="text-grayTextCT mt-3 flex items-center">
          <span className=""> Lựa chọn số tiền Trade</span>
          <Select
            options={optionsChicken}
            value={chicken}
            onChange={handleChange}
          />
          <span className="ml-2 text-whiteCT font-medium">%</span>
        </div>

        <div className="text-grayTextCT mt-1 flex items-center">
          Số tiền được Trade ( Gà ) :
          <span className="text-yellowCT text-[32px] font-medium ml-4">
            {percentUSDT}
          </span>
        </div>

        <>
          {isActiveTrade && (
            <>
              <span className="text-grayTextCT">
                ---------------------------------------
              </span>

              <div className="text-grayTextCT mt-3">
                Số lần ngầm :<span className="text-red-500 mg-l-5">1</span>/
                <span className="text-green-500">3</span>
              </div>

              <div className="text-grayTextCT mg-t-15">
                Thếp đang chạy :<span className="text-red-500 mg-l-5">1</span>/
                <span className="text-green-500">6</span>
              </div>

              <div className="text-grayTextCT mg-t-15 line-through">
                Số lần vào lệnh hôm nay :{" "}
                <span className="text-white mg-l-5">Chưa phát triển</span>
              </div>
            </>
          )}
        </>
      </div>

      <div className="flex justify-center ">
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
          text-[25px]
          px-8 py-5 me-2 mb-2 
          focus:outline-none"
        >
          Start Trading
        </button>

        <Modal/>
      </div>
    </div>
  );
};

export default ToDayTrading;
