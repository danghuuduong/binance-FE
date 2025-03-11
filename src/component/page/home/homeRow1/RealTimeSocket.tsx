import * as React from "react";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { CandlestickDataI } from "../../../../interface/HomeI/candlestickDataI";
import LoadDingPage from "../../../../common/components/loadingPage/LoadingPage";
import { handleParseFloat2 } from "../../../../common/utils/handleParseInt";
import { handleTimestamp } from "../../../../common/utils/handleTimestamp";

const RealTimeSocket: React.FC = () => {
  const [data, setData] = useState<CandlestickDataI | null>(null);
  // const [socket, setSocket] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const isendApi = React.useRef(false);

  useEffect(() => {
    setIsLoading(true);
    const newSocket = io(import.meta.env.VITE_API_BASE_URL2, {
      withCredentials: true,
    });

    newSocket.on("connect_error", (err) => {
      console.error("not Socket connection error:", err);
      setIsLoading(false);
    });

    // newSocket && setSocket(newSocket);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    newSocket.on("candleStick-RealTime", (data: any) => {
      setIsLoading(false);
      setData(data);
    });

    return () => {
      localStorage.removeItem("candlestickType");
      newSocket.disconnect();
    };
  }, []);

  const positions = data?.positions[0];

  const openOrders = data?.openOrders || [];

  const takeProfitOrders = openOrders.filter(
    (value: any) => value.info.origType === "TAKE_PROFIT_MARKET"
  );
  const otherOrders = openOrders.filter(
    (value: any) => value.info.origType === "STOP_MARKET"
  );

  const sortedAndReversedOrders = [...takeProfitOrders, ...otherOrders];

  return (
    <>
      {isLoading && <LoadDingPage />}
      <div>
        <div className="flex justify-between items-start">
          <div className="flex">
            <div
              className={`w-2 max-h-64 ${
                positions?.side === "long" ? "bg-green-500" : "bg-red-500"
              } rounded-md`}
            ></div>
            <div className="ml-2">
              <div className="text-grayTextCT">Symbol</div>
              <div>{positions?.symbol || "-"}</div>
            </div>
          </div>

          <div>
            <div className="text-grayTextCT">Size</div>
            <div
              className={`${
                positions?.info?.positionAmt > 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {positions?.info?.positionAmt || "-"} BTC
            </div>
          </div>

          <div>
            <div className="text-grayTextCT">Entry Price</div>
            <div>{handleParseFloat2(positions?.info?.entryPrice) || "-"} $</div>
          </div>

          <div>
            <div className="text-grayTextCT">Margin</div>
            <div>
              <div>
                {handleParseFloat2(positions?.info?.positionInitialMargin) ||
                  "-"}
                $
              </div>
              <div className="ml-1">{positions?.marginType}</div>
            </div>
          </div>

          <div>
            <div className="text-grayTextCT"> PNL(ROI %) </div>
            <div
              className={`${
                positions?.info?.unRealizedProfit > 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              <div>
                {handleParseFloat2(positions?.info?.unRealizedProfit) || "-"}{" "}
                USDT
              </div>
              <div className="ml-1">({positions?.percentage} %)</div>
            </div>
          </div>

          <div>
            <div className="text-grayTextCT">TP/SL</div>
            <div>
              {sortedAndReversedOrders?.map((value) => {
                const isSL = value.info.origType === "STOP_MARKET";
                return (
                  <div key={value.id}>
                    <span>
                      {!isSL && positions?.side === "long" ? ">=" : "<="}
                    </span>
                    <span className="ml-2">{value.stopPrice}</span>
                    <span className="ml-2">{isSL ? "Chốt SL" : "Chốt TP"}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-grayTextCT"> Thời gian</div>
            <div>{handleTimestamp(positions?.info.updateTime)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealTimeSocket;
