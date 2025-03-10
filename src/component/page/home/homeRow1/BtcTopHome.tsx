import * as React from "react";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { CandlestickDataI } from "../../../../interface/HomeI/candlestickDataI";
import LoadDingPage from "../../../../common/components/loadingPage/LoadingPage";
import { formatNumber } from "../../../../common/utils/utilCovert";
import abc from "../../../../assets/notifyOrderPlaced.mp3";

const BtcTopHome: React.FC = () => {
  const [data, setData] = useState<CandlestickDataI | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [socket, setSocket] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const newSocket = io(import.meta.env.VITE_API_BASE_URL2, {
      withCredentials: true,
    });

    newSocket.on("connect_error", (err) => {
      console.error("not Socket connection error:", err);
      setIsLoading(false);
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    newSocket && setSocket(newSocket);
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

  const EMACross = () => {
    switch (data?.emaCrossOverStatus?.status) {
      case "down":
        return "9 Cross 25 (Down)";
      case "up":
        return "9 Cross 25 (Up)";
      default:
        return "Không cắt nhau";
    }
  };

  const orderNotification = () => {

    if (data?.messenger !== "null" && data?.messenger !== undefined) {
      console.log(`Có biến khi vào tiền ${data?.messenger}`);
      return
    }
  };
  orderNotification()

  const notifyOrderPlaced = () => {

    if (data?.isWaitingForCompletionStatus) {
      console.log("Đã vào lệnh");
      // alert("Đã vào lệnh");
      return
    }
  };

  notifyOrderPlaced()


  return (
    <>
      {isLoading && <LoadDingPage />}
      <div >
        {/* <div className="text-grayTextCT text-center mt-3">
          {data?.closeTime
            ? `${data?.openTime} ---> ${data?.closeTime}`
            : "MM/DD/YYYY, 00:00:00 PM ---> MM/DD/YYYY, 00:00:00 PM"}
        </div> */}

        <div className="flex justify-between items-center">


          <div className=" font-medium flex items-center">
            <span className="text-yellowCT text-xl">BTC : </span>
            <span className="text-primary  text-2xl ml-2">
              {data?.closePrice ? formatNumber(data.closePrice) : "-"}
            </span>
          </div>



          {/* <div>
            <div className="text-grayTextCT">24h High</div>
            <div className="text-green-500">
              {data?.highPrice ? formatNumber(data.openPrice) : "-"}
            </div>
          </div> */}

          {/* <div>
            <div className="text-grayTextCT">24h Low</div>
            <div className="text-red-500">
              {data?.lowPrice ? formatNumber(data.highPrice) : "-"}
            </div>
          </div> */}

          {/* <div>
            <div className="text-grayTextCT">24h Volume(USDT)</div>
            <div className="text-red-500">
              {data?.lowPrice ? formatNumber(data.lowPrice) : "-"}
            </div>
          </div> */}

          <div>
            <div className="text-grayTextCT">Volume : </div>
            <div>{data?.volume || "-"}</div>
          </div>

          <div>
            <div className="text-grayTextCT">Type api</div>
            <div>{data?.type || "-"}</div>
          </div>

          <div>
            <div className="text-grayTextCT">Volume : </div>
            <div>{data?.timeBinance || "-"}</div>
          </div>

          <div>
            <div className="text-grayTextCT">EMACross</div>
            <div>
              <span>{EMACross()}</span>
              <span> - </span>
              <span>time: {data?.emaCrossOverStatus?.time === "null" ? `"-"` : data?.emaCrossOverStatus?.time}</span></div>
          </div>

          <div>
            <div className="text-grayTextCT">messenger</div>
            <div>{`${data?.messenger}`}</div>
          </div>

        </div>
      </div>
    </>
  );
};

export default BtcTopHome;
