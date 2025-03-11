import React, { useContext } from "react";
import { TEChart } from "tw-elements-react";
import ThemeContext from "../../../../context/FoodContext";
import { handleParseFloat2 } from "../../../../common/utils/handleParseInt";

const LineChartHome: React.FC = () => {
  const { largestMoneyApi } = useContext(ThemeContext);
  const historyList = largestMoneyApi?.history;
  const labels = historyList?.map((item) => `${handleParseFloat2(item,0) } $`) || [];
  const data = historyList?.map((value) => parseInt(`${handleParseFloat2(value,0)}`, 10)) || []

  return (
    <div className="px-28">
      <div className="text-2xl font-medium ">The amount changes</div>
      <TEChart
        type="line"
        data={{
          labels: labels,
          datasets: [
            {
              label: `Số tiền lớn nhất null $`,
              data: data,
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChartHome;
