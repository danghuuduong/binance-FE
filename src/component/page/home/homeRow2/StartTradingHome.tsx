import React, { useEffect, useState } from "react";
import Select from "../../../../common/components/select/select";
import Modal from "../../../../common/components/modal/Modal";

const optionsChicken: string[] = ["10", "20", "30"];

const StartTradingHome: React.FC = () => {
  const [usd, setUsd] = useState<string>("-"); // USDT hiện tại
  const chickenType = localStorage.getItem("chickenType") || "10";// %
  const [chicken, setChicken] = useState<string>(chickenType); // Số tiền sẽ cư
  const [isTrade, setIsTrade] = useState<boolean>(false); // Bắt đầu trading
  const [isModal, setIsModal] = useState(false);

  const [isWaitingForCompletion, setisWaiting] = useState<boolean>(false); // Chờ để kết thúc lệnh

  useEffect(() => {
    // call api getthongtin
    setUsd("1000");
  }, []);


  useEffect(() => {
    // setisWaiting(false)
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
    setIsTrade(!isTrade)
    if (isTrade) {
      setIsTrade(false)
      setisWaiting(true)
    } else {
      setIsTrade(true)
    }
  };

  const percentUSDT = (Number(usd) / 100) * Number(chickenType) || 0; // Số tiền sẽ cư

  return (
    <>
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

          {
            isTrade && <span className="text-grayTextCT">
              ---------------------------------------
            </span>
          }


          <div className="">

            <>
              {
                isWaitingForCompletion
                  ? <div >
                    <button type="button" disabled className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                      <span>Đang chờ hoàn tất ...</span>

                      <div role="status " className="translate-x-3">
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                      </div>

                    </button>

                  </div>
                  : <button
                    type="button"
                    className={`mt-10 
                    text-grayInButtonYellow flex items-center
                      hover:scale-105
                      duration-300
                      ease-in-out
                      font-medium 
                      text-sm
                      rounded-lg
                      text-[25px]
                      px-8 py-3 me-2 mb-2 
                      focus:outline-none
                      ${isTrade ? 'bg-red-300 hover:bg-red-700' : "bg-yellowCT hover:bg-yellow-200 "}
                   `}
                    onClick={() => setIsModal(true)}
                  >

                    <span className="animate-">{isTrade ? "Stop Trading" : "Start Trading"}</span>
                    {
                      isTrade && <span className="relative flex h-7 w-7 ml-2 translate-y-0.5 translate-x-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-700 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-7 w-7 bg-red-500"></span>
                      </span>
                    }
                  </button>
              }
            </>

          </div>

          <>
            {isTrade && (
              <>
                <div className="text-grayTextCT mt-3">
                  Số lần ngầm :<span className="text-red-500 mg-l-5">1</span>/
                  <span className="text-green-500">3</span>
                </div>

                <div className="text-grayTextCT mg-t-15">
                  Thếp đang chạy :<span className="text-red-500 mg-l-5">1</span>/
                  <span className="text-green-500">6</span>
                </div>

                <div className="text-grayTextCT mg-t-15 line-through">
                  Số lần vào lệnh hôm nay :
                  <span className=" ml-2 ">Chưa phát triển</span>
                </div>
              </>
            )}
          </>
        </div>


      </div >
      {isModal &&
        <Modal
          closeModal={closeModal}
          confirmModal={confirmModal}
          title={isTrade ? "Bạn muốn STOP Trading ?" : "Bạn có chắc chắn Start Trading ?"}
          classCT = {isTrade ? "bg-red-600" : "bg-yellowCT text-gray-600"}
          textOK={isTrade ? "STOP" : "START"}
        >
          <>
            {
              isTrade ?
                <div className="text-grayTextCT">
                  <div className="text-grayTextCT">
                    Thếp đang chạy :<span className="text-red-500 mg-l-5">1</span>/
                    <span className="text-green-500">6</span>
                  </div>
                  <div className="mt-4  p-2 rounded-lg border-grayTextCT border-[1px]">
                    <div> <div className="text-red-500 mr-2 font-[700]"> * Lưu ý :
                    </div>- khi "STOP" sẽ tự động ngắt như sau : </div>
                    <div className="ml-6"> + khi "THẮNG" lệnh</div>
                    <div className="ml-6"> + Hoàn thành 6/6 </div>
                    <div className="ml-6"> + 0/6 ( Chưa kịp vào lệnh) </div>

                  </div>


                </div>
                :
                <div>
                  <div>
                    <span className="text-grayTextCT">Lựa chọn của bạn là : </span>
                    <span className="text-whiteCT ml-2">{chicken} %</span>
                  </div>

                  <div>
                    <span className="text-grayTextCT">Số tiền Trading ( Gà ) : </span>
                    <span className="text-whiteCT ml-2">{percentUSDT} $</span>
                  </div>

                </div>
            }
          </>

        </Modal>
      }
    </>

  );
};

export default StartTradingHome;
