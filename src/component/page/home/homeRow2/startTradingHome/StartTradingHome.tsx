import React, { useEffect, useState } from "react";
import Select from "../../../../../common/components/select/Select";
import Modal from "../../../../../common/components/modal/Modal";
import ModalStartTradingHome from "./ModalStartTradingHome";
import api from "../../../../../api/axios";
import Button from "../../../../../common/components/button/Button";
import IconLoading from "../../../../../common/components/iconLoading/IconLoading";
import LoadDingPage from "../../../../../common/components/loadingPage/LoadingPage";

const optionsChicken: string[] = ["10", "20", "30"];

const StartTradingHome: React.FC = () => {
  const [usd, setUsd] = useState<string>("-"); // USDT hiện tại
  const chickenType = localStorage.getItem("chickenType") || "10"; // %
  const [chicken, setChicken] = useState<string>(chickenType); // Số tiền sẽ cư
  const [isTrade, setIsTrade] = useState<boolean>(false); // Bắt đầu trading
  const [isModal, setIsModal] = useState(false);

  const [isWaitingForCompletion, setisWaiting] = useState<boolean>(false); // Chờ để kết thúc lệnh

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // call api getthongtin
    setUsd("1000");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Bắt đầu loading
      try {
        const response = await api.get("/status/status-trading"); // Thay đường dẫn API của bạn vào đây
        // console.log("🚀 ~ fetchData ~ :");
        // if (response.status === 200) {
        // }
      } catch (err) {
        console.error("🚀 ~ useEffect ~ error:", err);
      } finally {
        setIsLoading(false); // Dừng loading khi kết thúc
      }
    };
    fetchData();
  }, []); // Chạy khi component mount

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

  const percentUSDT = (Number(usd) / 100) * Number(chickenType) || 0; // Số tiền sẽ cư

  return (
    <>
      {isLoading && <LoadDingPage />}
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
              disabled={isTrade || isWaitingForCompletion}
            />
            <span className="ml-2 text-whiteCT font-medium">%</span>
          </div>

          <div className="text-grayTextCT mt-1 flex items-center">
            Số tiền được Trade ( Gà ) :
            <span className="text-yellowCT text-[32px] font-medium ml-4">
              {percentUSDT}
            </span>
          </div>

          {isTrade && (
            <span className="text-grayTextCT">
              ---------------------------------------
            </span>
          )}

          <div>
            {isWaitingForCompletion ? (
              <div>
                <Button text="Đang chờ hoàn tất ...">
                  <IconLoading />
                </Button>
              </div>
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
            {isTrade && (
              <>
                <div className="text-grayTextCT mt-3">
                  Số lần ngầm :<span className="text-red-500 mg-l-5">1</span>/
                  <span className="text-green-500">3</span>
                </div>

                <div className="text-grayTextCT mg-t-15">
                  Thếp đang chạy :<span className="text-red-500 mg-l-5">1</span>
                  /<span className="text-green-500">6</span>
                </div>

                <div className="text-grayTextCT mg-t-15 line-through">
                  Số lần vào lệnh hôm nay :
                  <span className=" ml-2 ">Chưa phát triển</span>
                </div>
              </>
            )}
          </>
        </div>
      </div>
      {isModal && (
        <Modal
          closeModal={closeModal}
          confirmModal={confirmModal}
          title={
            isTrade
              ? "Bạn muốn STOP Trading ?"
              : "Bạn có chắc chắn Start Trading ?"
          }
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
