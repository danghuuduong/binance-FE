import React, { useContext, useEffect, useState } from "react";
import Select from "../../../../../common/components/select/Select";
import Modal from "../../../../../common/components/modal/Modal";
import ModalStartTradingHome from "./ModalStartTradingHome";
import api from "../../../../../api/axios";
import Button from "../../../../../common/components/button/Button";
import IconLoading from "../../../../../common/components/iconLoading/IconLoading";
import LoadDingPage from "../../../../../common/components/loadingPage/LoadingPage";
import { handleParseFloat2 } from "../../../../../common/utils/handleParseInt";
import { dataUSDI } from "../../../../../interface/HomeI/StartTradingHomeI/StartTradingHomeType";
import ThemeContext from "../../../../../context/FoodContext";
import StartTradingHandle from "./StartTradingHandle";

const optionsChicken: string[] = ["10", "20", "30"];

const StartTradingHome: React.FC = () => {
  const [dataUSD, setDataUSD] = useState<dataUSDI | null>(null); // USDT hiện tại
  const chickenType = localStorage.getItem("chickenType") || "10"; // %
  const [chicken, setChicken] = useState<string>(chickenType); // Số tiền sẽ cươc
  const [isTrade, setIsTrade] = useState<boolean>(false); // Bắt đầu trading
  const [isModal, setIsModal] = useState(false);

  const [isWaitingForCompletion, setisWaiting] = useState<boolean>(false); // Chờ để kết thúc lệnh
  const [isLoading, setIsLoading] = useState(false);
  const { dataMount } = useContext(ThemeContext);
  const largest = dataMount?.largest;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await api.get("/my-infomation");
        if (response?.status === 200) {
          setDataUSD(response?.data);
        }
      } catch (err) {
        console.error("🚀 ~ useEffect ~ error:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (chicken: string) => {
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
    } else {
      startTrading();
    }
  };

  const startTrading = async () => {
    setIsLoading(true);
    try {
      const response = await api.post("status/start-trading");
      if (response?.status === 201) {
        setIsTrade(true);
        setIsLoading(false);
      }
    } catch (error) {
      setIsTrade(false);
      setIsLoading(false);
      console.log("Error volume data:", error);
    }
  };

  const stopTrading = async () => {
    setIsLoading(true);
    try {
      const response = await api.post("status/stop-trading");
      if (response?.status === 201) {
        setIsTrade(false);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Error volume data:", error);
    }
  };
  const percentUSDT = (Number(largest) / 100) * Number(chickenType) || 0; // Số tiền sẽ cược

  return (
    <>
      {isLoading && <LoadDingPage />}
      <div>
        <div className="text-2xl font-medium text-center ">
          Bắt Đầu Trading tool
        </div>
        <div className="mt-12">
          <div className="text-grayTextCT mt-3">
            Số dư khả dụng :
            <span className="text-whiteCT ml-2">
              {handleParseFloat2(dataUSD?.USDT?.total)} USD
            </span>
          </div>

          <StartTradingHandle largest={largest} percentUSDT={percentUSDT}>
            <Select
              options={optionsChicken}
              value={chicken}
              onChange={handleChange}
              disabled={isTrade || isWaitingForCompletion}
            />
          </StartTradingHandle>

          <div className="mt-5">
            {isWaitingForCompletion ? (
              <Button text="Đang chờ hoàn tất ...">
                <IconLoading />
              </Button>
            ) : (
              <Button
                text={isTrade ? "Stop Trading" : "Start Trading"}
                classCT={`${
                  isTrade
                    ? "bg-red-300 hover:bg-red-700"
                    : "bg-yellowCT hover:bg-yellow-200 "
                } text-grayInButtonYellow`}
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

          <>
            <div className="text-grayTextCT mt-3 line-through">
              Số lần ngầm :<span className="text-red-500 mg-l-5">0</span>/
              <span className="text-green-500">3</span>
            </div>

            <div className="text-grayTextCT mg-t-15 line-through">
              Thếp đang chạy :<span className="text-red-500 mg-l-5">0</span>/
              <span className="text-green-500">6</span>
            </div>

            <div className="text-grayTextCT mg-t-15 line-through">
              Số lần vào lệnh hôm nay :
              <span className=" ml-2 ">Chưa phát triển</span>
            </div>
          </>
        </div>
      </div>
      {isModal && (
        <Modal
          closeModal={closeModal}
          confirmModal={confirmModal}
          title={ isTrade ? "Bạn muốn STOP Trading ?" : "Bạn có chắc chắn Start Trading ?" }
          classCT={isTrade ? "bg-red-600" : "bg-yellowCT text-gray-600"}
          textOK={isTrade ? "STOP" : "START"}
        >
          <ModalStartTradingHome
            isTrade={isTrade}
            chicken={chicken}
            percentUSDT={percentUSDT}
          />
        </Modal>
      )}
    </>
  );
};

export default StartTradingHome;
