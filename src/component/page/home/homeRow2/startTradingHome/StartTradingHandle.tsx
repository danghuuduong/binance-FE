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
      </div>
    </>
  );
};

export default StartTradingHandle;
