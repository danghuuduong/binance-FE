import { handleParseFloat2 } from "../../../../../common/utils/handleParseInt";
import { getStartTrading } from "../../../../../interface/HomeI/StartTradingHomeI/StartTradingHomeType";

interface ResultTradingfromApiProps {
  resultSttatusTrading: getStartTrading | null;
}

const ResultTradingfromApi: React.FC<ResultTradingfromApiProps> = ({
  resultSttatusTrading,
}) => {

  return (
    <div className="border-2 border-[#3d3d3d] mt-6 p-3">
      <div className="font-semibold text-2xl flex justify-center">
          Xác thực trên Serrvice
      </div>

      <div>
        <span className="text-grayTextCT mr-2"> Số tiền dự kiến muốn: </span>
        {handleParseFloat2(resultSttatusTrading?.moneyfodingOne)} USD
      </div>
      <div>
        <span className="text-grayTextCT mr-2"> totalAmount: </span>
        {resultSttatusTrading?.totalAmount} $
      </div>
    </div>
  );
};

export default ResultTradingfromApi;
