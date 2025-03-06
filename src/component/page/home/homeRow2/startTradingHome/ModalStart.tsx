import React, { useContext } from "react";
import ThemeContext from "../../../../../context/FoodContext";
import { handleParseFloat2 } from "../../../../../common/utils/handleParseInt";
import { handleFodingToMoney } from "../../../../../common/utils/handleFodingToMoney";

interface ModalStartTradingHomeI {
    isTrade?: boolean;
    chicken?: string;
    money?: string | number
}

const ModalStartTradingHome: React.FC<ModalStartTradingHomeI> = ({ isTrade, chicken, money }) => {
    const { foldingCurrent } = useContext(ThemeContext);
    const moneyOne = money && foldingCurrent ? handleFodingToMoney(money, foldingCurrent) : 0;
    return (
        <div>
            {isTrade ?
                <div className="text-grayTextCT">
                    <div className="text-grayTextCT">
                        Thếp đang chạy :<span className="text-red-500 mg-l-5">{foldingCurrent}</span>/
                        <span className="text-green-500">5</span>
                    </div>
                    <div className="mt-4  p-2 rounded-lg border-borderCT border-[1px]">
                        <div> <div className="text-red-500 mr-2 font-[700]"> * Lưu ý :
                        </div>- khi "STOP" sẽ tự động ngắt như sau : </div>
                        <div className="ml-6"> + khi "THẮNG" lệnh</div>
                        <div className="ml-6"> + Hoàn thành 5/5 </div>
                        <div className="ml-6"> + 0/5 ( Chưa kịp vào lệnh) </div>

                    </div>
                </div>
                :
                <div>
                    <div>
                        <span className="text-grayTextCT">Lựa chọn của bạn là : </span>
                        <span className="text-whiteCT ml-2">{chicken} %</span>
                    </div>
                    <div>
                        <span className="text-grayTextCT">Tiền Trading  </span>
                        <span className="text-green-500 ml-2">{handleParseFloat2(moneyOne)} $</span>
                    </div>
                    <div>
                        <span className="text-grayTextCT">Tổng tiền Trading ( Gà ) : </span>
                        <span className="text-whiteCT ml-2">{money} $</span>
                    </div>

                </div>
            }
        </div>);
}

export default ModalStartTradingHome;