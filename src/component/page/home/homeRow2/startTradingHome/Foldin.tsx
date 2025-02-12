import { useContext, } from "react";
import { handleParseFloat2 } from "../../../../../common/utils/handleParseInt";
import ThemeContext from "../../../../../context/FoodContext";
import { handleFoding } from "../../../../../common/utils/handleFoding";
import IconLoading from "../../../../../common/components/iconLoading/IconLoading";

interface StartTradingHandleProps {
  largest: string | undefined;
  children: React.ReactNode;
  money: number;
}

const Foldin: React.FC<StartTradingHandleProps> = ({
  largest,
  children,
  money,
}) => {

  const { foldingCurrent,isTrade } = useContext(ThemeContext);

  const foldingList = [
    { folding: "1", value: handleFoding(money, 1) },
    { folding: "2", value: handleFoding(money, 2) },
    { folding: "3", value: handleFoding(money, 3) },
    { folding: "4", value: handleFoding(money, 4) },
    { folding: "5", value: handleFoding(money, 5) },
  ];

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
          <span className="ml-2 text-whiteCT font-medium">%</span>
        </div>

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
                <li key={item.folding} className={`mt-2 flex items-center ${foldingCurrent == Number(item.folding) ? "text-green-500 font-bold" : "text-grayTextCT"}`}>
                  <span>Thếp {item.folding} :</span>
                  <span className="ml-2"> {handleParseFloat2(handleFoding(money, Number(item.folding)))} $</span>
                  {isTrade &&foldingCurrent == Number(item.folding) && <span><IconLoading size={7} /></span>}
                </li>
              );
            })}
          </ul>
          <div className="mt-2">
            <span>Tổng dự kiến:</span>
            <span className="text-red-500 ml-3">
              {handleParseFloat2(foldingList.reduce((total, item) => total + item.value, 0), 4)}$
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foldin;
