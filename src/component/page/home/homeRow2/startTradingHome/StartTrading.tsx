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
import { getStartTrading } from "../../../../../interface/HomeI/StartTradingHomeI/StartTradingHomeType";
import ResultTradingfromApi from "./ResultTradingfromApi";

const optionsChicken: number[] = [1, 3, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 30, 35, 40, 45, 50];

const StartTrading: React.FC = () => {
  const [chicken, setChicken] = useState<number>(1);
  const [isModal, setIsModal] = useState(false);
  const [resultSttatusTrading, setResultSttatusTrading] = useState<getStartTrading | null>(null);
  const { usdcurrent } = useContext(ThemeContext);

  const setInitStartTrading = async () => {
    try {
      const response = await api.post("status/start-trading", {
        tradeRate: chicken,
        largestMoney: usdcurrent,
        isTrading: false,
      });
      if (response?.status === 201) {
        getStartTrading();
      }
    } catch (error) { }
  };

  const getStartTrading = async () => {
    try {
      const response = await api.get("status/start-trading-get");
      if (response?.status === 200) {
        if (response?.data?.data?.length > 0) {
          setResultSttatusTrading(response?.data?.data[0]);
          setChicken(response?.data?.data[0].tradeRate);
        } else {
          if (Number(usdcurrent) > 0) {
            setInitStartTrading(); // Gọi khi chưa bắt đầu giao dịch
          }
        }
      }
    } catch (error) { }
  };

  useEffect(() => {
    getStartTrading();
  }, [usdcurrent]);

  const handleChickenTypeChange = (chicken: number) => {
    setChicken(chicken);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const handleIsWaiting = async () => {
    try {
      const response = await api.post("status/stop-trading");
      response?.status === 201 && getStartTrading();
    } catch (error) {
      alert(`Hủy bỏ trạng thái giao dịch thất baị`);
    }
  };

  const largestMoney = resultSttatusTrading?.largestMoney;
  const totalAmount = (Number(largestMoney) / 100) * Number(chicken) || 0;

  const confirmModal = () => {
    setIsModal(false);
    if (
      resultSttatusTrading?.isTrading &&
      !resultSttatusTrading?.isWaitingForCompletion
    ) {
      handleIsWaiting();
    }
    if (
      !resultSttatusTrading?.isTrading &&
      !resultSttatusTrading?.isWaitingForCompletion &&
      !resultSttatusTrading?.isActiveExecuteTrade
    ) {
      startTrading();
    }
  };

  const startTrading = async () => {
    if (resultSttatusTrading?._id) {
      const moneyfodingOne = handleFodingToMoney(totalAmount, 1);
      const amount = moneyfodingOne / 800; // 0.0024

      if (amount >= 0.004) {
        const payload = {
          isTrading: true,
          tradeRate: Number(chicken),
          moneyfodingOne,
          totalAmount,
        };
        try {
          const response = await api.put(
            `status/${resultSttatusTrading?._id.toString()}`,
            payload
          );
          response.status === 200 && getStartTrading();

          alert(
            `đã vào lệnh :${moneyfodingOne} khoảng : ${amount} BTC và ${largestMoney} phải lơn`
          );

        } catch (error) {
          alert(`API : Start Đang có vấn đề, vui lòng thử lại`);
        }


      } else {
        alert(
          ` - Số tiền phải lớn hơn 3$ .\n - Tổng số tiền dự kiến phải cao hơn 137$\n - Số dư tài khoản phải đủ 137$
           `
        );
      }

    } else {
      alert(`Start lỗi, Hãy liên hệ Hữu Dương zalo: 0986442833`);
    }
  };

  return (
    <>
      <div>
        <div className="text-2xl font-medium text-center font">
          Bắt Đầu Trading tool
        </div>
        <div className="mt-12">
          <Infomation />

          <Folding
            largest={largestMoney}
            money={totalAmount}
            folding={resultSttatusTrading?.foldingCurrent}
          >
            <Select
              options={optionsChicken}
              value={chicken}
              onChange={handleChickenTypeChange}
              resultSttatusTrading={resultSttatusTrading}
              disabled={
                resultSttatusTrading?.isTrading ||
                resultSttatusTrading?.isWaitingForCompletion
              }
            />
          </Folding>

          <div className="mt-5">
            {resultSttatusTrading?.isWaitingForCompletion ? (
              <Button text="Đang chờ hoàn tất ...">
                <IconLoading />
              </Button>
            ) : (
              <Button
                text={
                  resultSttatusTrading?.isTrading
                    ? "Stop Trading"
                    : "Start Trading"
                }
                classCT={`${resultSttatusTrading?.isTrading
                  ? "bg-red-300 hover:bg-red-700"
                  : "bg-yellowCT hover:bg-yellow-200 "
                  } text-grayInButtonYellow`}
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
          {resultSttatusTrading && (
            <ResultTradingfromApi resultSttatusTrading={resultSttatusTrading} />
          )}
        </div>
      </div>
      {isModal && (
        <Modal
          closeModal={closeModal}
          confirmModal={confirmModal}
          title={
            resultSttatusTrading?.isTrading
              ? "Bạn muốn STOP Trading ?"
              : "Bạn có chắc chắn Start Trading ?"
          }
          classCT={
            resultSttatusTrading?.isTrading
              ? "bg-red-600"
              : "bg-yellowCT text-gray-600"
          }
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
