import { handleParseFloat2 } from "../../../../../common/utils/handleParseInt";

interface StartTradingHandleProps {
  largest: string | undefined;
  children: React.ReactNode;
  percentUSDT: number;
}

const StartTradingHandle: React.FC<StartTradingHandleProps> = ({
  largest,
  children,
  percentUSDT,
}) => {
  const foldingOne = (percentUSDT * 2.2) / 100;
  const foldingList = [
    { folding: "1", value: foldingOne },
    { folding: "2", value: foldingOne * 2.5 },
    { folding: "3", value: foldingOne * 5.5 },
    { folding: "4", value: foldingOne * 12 },
    { folding: "5", value: foldingOne * 23.5 },
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
            {handleParseFloat2(percentUSDT)} $
          </span>
        </div>

        <div>
          <ul>
            {foldingList.map((item) => {
              return (
                <li key={item.folding} className="text-grayTextCT mt-2">
                  <span>Thếp {item.folding} :</span>
                  <span className="text-red-500 ml-2">
                    {handleParseFloat2(item.value, 2)} $
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="mt-2">
            <span>Tổng dự kiến:</span>
            <span className="text-red-500 ml-3">
              {handleParseFloat2(
                foldingList.reduce((total, item) => total + item.value, 0),
                4
              )}{" "}
              $
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartTradingHandle;
