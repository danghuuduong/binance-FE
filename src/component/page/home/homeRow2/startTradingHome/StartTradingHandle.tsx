import { handleParseFloat2 } from "../../../../../common/utils/handleParseInt";

interface StartTradingHandleProps {
  largest: string | undefined;
  children: React.ReactNode;
  percentUSDT: number;
}

const StartTradingHandle: React.FC<StartTradingHandleProps> = ({ largest, children, percentUSDT, }) => {
  console.log("🚀 ~ file:percentUSDT", percentUSDT)
  const tienflend = 100
  const thep1 = (percentUSDT * 2) / 100
  const thepList = [
    { id: 1, name: "thếp 1", value: thep1 },
    { id: 2, name: "thếp 2", value: thep1 * 2.5 },
    { id: 3, name: "thếp 3", value: thep1 * 5.5 },
    { id: 4, name: "thếp 4", value: thep1 * 12 },
    { id: 5, name: "thếp 5", value: thep1 * 23.5 },
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
            {thepList.map((item) => {
              return <li key={item.id} className="text-grayTextCT mt-3">
                {item.name} :<span className="text-red-500 ml-2">{item.value} $</span>
              </li>
            })}
          </ul>
          <div className="mt-3">
            <span>Tổng :</span> 
            <span className="text-red-500 ml-2">
              {thepList.reduce((total, item) => total + item.value, 0)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartTradingHandle;
