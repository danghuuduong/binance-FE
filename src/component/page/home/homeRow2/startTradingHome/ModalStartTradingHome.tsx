import React from "react";

interface ModalStartTradingHomeI {
    isTrade: boolean;
    chicken?: string;
    percentUSDT?: string | number
}

const ModalStartTradingHome: React.FC<ModalStartTradingHomeI> = ({ isTrade, chicken, percentUSDT }) => {
    console.log("isTrade", isTrade);

    return (<div>
        <>
            {
                isTrade ?
                    <div className="text-grayTextCT">
                        <div className="text-grayTextCT">
                            Thếp đang chạy :<span className="text-red-500 mg-l-5">1</span>/
                            <span className="text-green-500">6</span>
                        </div>
                        <div className="mt-4  p-2 rounded-lg border-borderCT border-[1px]">
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
        </></div>);
}

export default ModalStartTradingHome;