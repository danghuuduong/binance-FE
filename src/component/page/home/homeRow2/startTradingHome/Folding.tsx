import { useContext, useState } from "react";
import { handleParseFloat2 } from "../../../../../common/utils/handleParseInt";
import ThemeContext from "../../../../../context/FoodContext";
import IconLoading from "../../../../../common/components/iconLoading/IconLoading";
import { handleFodingToMoney } from "../../../../../common/utils/handleFodingToMoney";
import Modal from "../../../../../common/components/modal/Modal";

interface StartTradingHandleProps {
  largest: number | null | undefined;
  children: React.ReactNode;
  money: number;
  folding?: number;
}

const Folding: React.FC<StartTradingHandleProps> = ({
  largest,
  children,
  money,
  folding,
}) => {
  const { foldingCurrent, isTrade } = useContext(ThemeContext);

  const foldingList = [
    { folding: 1, value: handleFodingToMoney(money, 1) },
    { folding: 2, value: handleFodingToMoney(money, 2) },
    { folding: 3, value: handleFodingToMoney(money, 3) },
  ];


  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <div className="border-2 border-[#3d3d3d] mt-3 p-3">
        <div className="text-grayTextCT mt-3">
          Số Tiền lớn nhất :
          <span className="text-whiteCT ml-2">
            {handleParseFloat2(largest)} USD
          </span>
        </div>

        <div className="text-grayTextCT mt-3 flex items-center">
          <span> Tiền Trade :</span>
          {children}
          <span className="ml-2 text-whiteCT font-medium cursor-pointer" title="các"  onClick={() => setIsModal(true)}>Tìm hiểu (?)</span>
        </div>

        {
          isModal && <Modal
            closeModal={() => setIsModal(!isModal)}
            confirmModal={() => setIsModal(!isModal)}
            title={"Bạn muốn STOP Trading ?"}
            classCT={"bg-red-600"}
            textCancel="Đóng"
          >
            <div className="text-align">
              <div>1. 1000 $ sẽ không được chọn 35% đến 50% nữa </div>
              <div>2. 1300 $ sẽ không được chọn 30% đến 50% nữa </div>
              <div>3. 2000 $ sẽ không được chọn 25% đến 50% nữa </div>
              <div>4. 5000 $ sẽ không được chọn 20% đến 50% nữa </div>
            </div>
          </Modal>
        }



        <div className="text-grayTextCT mt-1 flex items-center">
          Số tiền Trade ( Gà ) :
          <span className="text-yellowCT text-[32px] font-medium ml-4">
            {handleParseFloat2(money)} $
          </span>
        </div>

        <div>
          <ul>
            {foldingList?.map((item) => {
              return (
                <li
                  key={item.folding}
                  className={`mt-2 flex items-center ${folding == item.folding
                    ? "text-green-500 font-bold"
                    : "text-grayTextCT"
                    }`}
                >
                  <span>Thếp {item.folding} :</span>
                  <span className="ml-2">
                    {handleParseFloat2(
                      handleFodingToMoney(money, item.folding)
                    )}
                    $
                  </span>
                  {isTrade && foldingCurrent == item.folding && (
                    <span>
                      <IconLoading size={7} />
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-2">
            <span>Tổng dự kiến:</span>
            <span className="text-red-500 ml-3">
              {handleParseFloat2(
                foldingList.reduce((total, item) => total + item.value, 0),4
              )}
              $
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Folding;
