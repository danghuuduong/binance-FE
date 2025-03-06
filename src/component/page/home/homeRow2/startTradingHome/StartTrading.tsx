import React, { useContext, useEffect, useRef, useState } from "react";
import Select from "../../../../../common/components/select/Select";
import Modal from "../../../../../common/components/modal/Modal";
import ModalStart from "./ModalStart";
import api from "../../../../../api/axios";
import Button from "../../../../../common/components/button/Button";
import IconLoading from "../../../../../common/components/iconLoading/IconLoading";
import ThemeContext from "../../../../../context/FoodContext";
import Folding from "./Folding";
import Infomation from "./Infomation";
import { handleFodingToMoney } from "../../../../../common/utils/handleFodingToMoney";
import axios from "axios";

const optionsChicken: string[] = ["10", "20", "30"];

interface getStartTrading {
  _id?: string,
  isTrading: boolean,
  foldingCurrent: number,
  largestMoney?: number,
  totalAmount: number,
  moneyfodingOne: number,
  isActiveExecuteTrade: boolean,
  isWaitingForCompletion: boolean,
  tradeRate: number,
  idOrderMain: string,
  idStopLossOrder: string,
  idTakeProfitOrder: string,

}
const StartTrading: React.FC = () => {
  const chickenType = localStorage.getItem("chickenType") || "10"; // %
  const [chicken, setChicken] = useState<string>(chickenType); // Số tiền sẽ cươc
  const [isModal, setIsModal] = useState(false);
  const [resultSttatusTrading, setResultSttatusTrading] = useState<getStartTrading | null>(null);
  const { usdcurrent } = useContext(ThemeContext);


  const setInitStartTrading = async () => {
    try {
      const response = await api.post("status/start-trading", {
        tradeRate: chicken,
        largestMoney: usdcurrent,
        isTrading: false
      });
      if (response?.status === 201) {
        getStartTrading();
      }
    } catch (error) {
    }
  }


  const getStartTrading = async () => {
    try {
      const response = await api.get("status/start-trading-get");
      if (response?.status === 200) {
        if (response?.data?.data?.length > 0) {
          setResultSttatusTrading(response?.data?.data[0]);
        } else {
          if (Number(usdcurrent) > 0) {
            setInitStartTrading();  // Gọi khi chưa bắt đầu giao dịch
          }
        }
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    getStartTrading();
  }, [usdcurrent]);



  const handleChickenTypeChange = (chicken: string) => {
    localStorage.setItem("chickenType", chicken);
    setChicken(chicken);
  };

  const closeModal = () => {
    setIsModal(false);
  };



  const handleIsWaiting = async () => {
    try {
      const response = await api.post("status/stop-trading");
      response?.status === 201 && getStartTrading()
    } catch (error) {
      alert(`Hủy bỏ trạng thái giao dịch thất baị`)
    }
  };


  const largestMoney = resultSttatusTrading?.largestMoney
  const totalAmount = (Number(largestMoney) / 100) * Number(chickenType) || 0;

  const confirmModal = () => {
    setIsModal(false);
    if (resultSttatusTrading?.isTrading && !resultSttatusTrading?.isWaitingForCompletion) {
      handleIsWaiting()
    }
    if (!resultSttatusTrading?.isTrading && !resultSttatusTrading?.isWaitingForCompletion && !resultSttatusTrading?.isActiveExecuteTrade) {
      startTrading();
    }
  };

  const startTrading = async () => {
    if (resultSttatusTrading?._id) {
      try {
        const moneyfodingOne = handleFodingToMoney(totalAmount, 1);
        const giabtc = await axios.get('https://testnet.binance.vision/api/v3/ticker/price', {
          params: {
            symbol: 'BTCUSDT', // BTC/USDT pair
          },
        });

        const btcPrice = (giabtc.data.price)
        const amount = moneyfodingOne / (1000 * 10);

        const minMoneyfodingOne = (btcPrice * 0.0013 * 10000) / btcPrice 

        if (amount > 0.0013 && moneyfodingOne > minMoneyfodingOne) {
          const payload = {
            isTrading: true,
            tradeRate: Number(chicken),
            moneyfodingOne,
            totalAmount
          }
          const response = await api.put(`status/${resultSttatusTrading?._id.toString()}`, payload);
          console.log("update", response);
          response.status === 200 && getStartTrading()

        } else {
          alert(`Số tiền phải lớn hơn ${minMoneyfodingOne} $ hiện tại là ${moneyfodingOne}`)
        }

      } catch (error) { alert(`Start Thất bại`) }
    } else {
      alert(`Start Thất bại`)
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
              disabled={resultSttatusTrading?.isTrading || resultSttatusTrading?.isWaitingForCompletion}
            />
          </Folding>

          <div className="mt-5">
            {resultSttatusTrading?.isWaitingForCompletion ? (
              <Button text="Đang chờ hoàn tất ...">
                <IconLoading />
              </Button>
            ) : (
              <Button
                text={resultSttatusTrading?.isTrading ? "Stop Trading" : "Start Trading"}
                classCT={`${resultSttatusTrading?.isTrading ? "bg-red-300 hover:bg-red-700" : "bg-yellowCT hover:bg-yellow-200 "} text-grayInButtonYellow`}
                onClick={() => setIsModal(true)}
              >
                {resultSttatusTrading?.isTrading && (
                  <span className="relative flex h-7 w-7 ml-2 translate-y-0.5 translate-x-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-7 w-7 bg-red-500"></span>
                  </span>
                )}
              </Button>
            )}
          </div>

          <div>
            <div>foldingCurrent : {resultSttatusTrading?.foldingCurrent}</div>
            <div>isTrading status: {resultSttatusTrading?.isTrading ? "true" : "false"}</div>
            <div>isWaitingForCompletion: {resultSttatusTrading?.isWaitingForCompletion ? "true" : "false"}</div>
            <div>isActiveExecuteTrade: {resultSttatusTrading?.isActiveExecuteTrade ? "Vào  tiền" : "Chưa vào tiền"}</div>
            <div>moneyfodingOne: {resultSttatusTrading?.moneyfodingOne} $</div>
            <div>totalAmount : {resultSttatusTrading?.totalAmount} $</div>
            <div>tradeRate : {resultSttatusTrading?.tradeRate} %</div>

          </div>
        </div>
      </div>
      {isModal && (
        <Modal
          closeModal={closeModal}
          confirmModal={confirmModal}
          title={resultSttatusTrading?.isTrading ? "Bạn muốn STOP Trading ?" : "Bạn có chắc chắn Start Trading ?"}
          classCT={resultSttatusTrading?.isTrading ? "bg-red-600" : "bg-yellowCT text-gray-600"}
          textOK={resultSttatusTrading?.isTrading ? "STOP" : "START"}
        >
          <ModalStart
            isTrade={resultSttatusTrading?.isTrading}
            chicken={chicken}
            money={totalAmount}
          />
        </Modal>
      )}
    </>
  );
};

export default StartTrading;
