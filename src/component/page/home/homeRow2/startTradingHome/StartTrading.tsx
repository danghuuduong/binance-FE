import React, { useContext, useEffect, useState } from "react";
import Select from "../../../../../common/components/select/Select";
import Modal from "../../../../../common/components/modal/Modal";
import ModalStart from "./ModalStart";
import api from "../../../../../api/axios";
import Button from "../../../../../common/components/button/Button";
import IconLoading from "../../../../../common/components/iconLoading/IconLoading";
import ThemeContext from "../../../../../context/FoodContext";
import Folding from "./Folding";
import Infomation from "./Infomation";
import { handleFodingToMoney } from "../../../../../common/utils/handleFoding";

const optionsChicken: string[] = ["10", "20", "30"];

const StartTrading: React.FC = () => {
  const chickenType = localStorage.getItem("chickenType") || "10"; // %
  const [chicken, setChicken] = useState<string>(chickenType); // Số tiền sẽ cươc
  const [isModal, setIsModal] = useState(false);

  const { dataMount, isTrade, setIsTrade, isWaitingForCompletion, setisWaiting, foldingCurrent } = useContext(ThemeContext);
  const largestMoney = dataMount?.largest;

  const totalAmount = (Number(largestMoney) / 100) * Number(chickenType) || 0; // Số tiền lớn nhất ,Số tiền sẽ cược 
  const moneyOne = totalAmount && foldingCurrent ? handleFodingToMoney(totalAmount, foldingCurrent) : 0;

  const handleChickenTypeChange = (chicken: string) => {
    localStorage.setItem("chickenType", chicken);
    setChicken(chicken);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const confirmModal = () => {
    setIsModal(false);
    if (isTrade) {
      setisWaiting(true);
      stopTrading();
    }
    startTrading();
  };

  const startTrading = async () => {
    try {
      const response = await api.post("status/start-trading", {
        moneyfodingOne: moneyOne,
        totalAmount,
        foldingCurrent,
      });
      response?.status === 201 && setIsTrade(true);
    } catch (error) {
      setIsTrade(false);
      console.log("API status/start-trading", error);
    }
  };

  const stopTrading = async () => {
    try {
      const response = await api.post("status/stop-trading");
      response?.status === 201 && setIsTrade(false);
    } catch (error) {
      console.log("API status/stop-trading", error);
    }
  };


  return (
    <>
      <div>
        <div className="text-2xl font-medium text-center "> Bắt Đầu Trading tool</div>
        <div className="mt-12">
          <Infomation />

          <Folding largest={largestMoney} money={totalAmount}>
            <Select
              options={optionsChicken}
              value={chicken}
              onChange={handleChickenTypeChange}
              disabled={isTrade || isWaitingForCompletion}
            />
          </Folding>

          <div className="mt-5">
            {isWaitingForCompletion ? (
              <Button text="Đang chờ hoàn tất ...">
                <IconLoading />
              </Button>
            ) : (
              <Button
                text={isTrade ? "Stop Trading" : "Start Trading"}
                classCT={`${isTrade ? "bg-red-300 hover:bg-red-700" : "bg-yellowCT hover:bg-yellow-200 "} text-grayInButtonYellow`}
                onClick={() => setIsModal(true)}
              >
                {isTrade && (
                  <span className="relative flex h-7 w-7 ml-2 translate-y-0.5 translate-x-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-7 w-7 bg-red-500"></span>
                  </span>
                )}
              </Button>
            )}
          </div>

        </div>
      </div>
      {isModal && (
        <Modal
          closeModal={closeModal}
          confirmModal={confirmModal}
          title={isTrade ? "Bạn muốn STOP Trading ?" : "Bạn có chắc chắn Start Trading ?"}
          classCT={isTrade ? "bg-red-600" : "bg-yellowCT text-gray-600"}
          textOK={isTrade ? "STOP" : "START"}
        >
          <ModalStart
            isTrade={isTrade}
            chicken={chicken}
            money={totalAmount}
          />
        </Modal>
      )}
    </>
  );
};

export default StartTrading;
