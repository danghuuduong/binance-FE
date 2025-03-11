import { getStartTrading } from "../../../interface/HomeI/StartTradingHomeI/StartTradingHomeType";

interface SelectProps {
  options: number[];
  value: number;
  onChange: (value: number) => void;
  cl?: string;
  disabled?: boolean;
  resultSttatusTrading?: getStartTrading | null
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  cl,
  disabled = false,
  resultSttatusTrading
}) => {

  return (
    <form className="inline-block ml-3">
      <select
        // disabled={disabled}
        id="time-interval-select"
        className={`rounded-md px-1 focus:outline-none bg-slate-600 translate-y-0.5 border-none cursor-pointer ${cl} text-whiteCT font-medium`}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {options.map((interval) => {
          const largestMoney = resultSttatusTrading?.largestMoney || 0
          const isDisbledItem30 = largestMoney > 1000 && interval === 30
          const isDisbledItem50 = largestMoney > 500  && interval === 50
          const isDisbledItem = isDisbledItem30 || isDisbledItem50
          
          return <option
            key={interval}
            value={interval}
            disabled={isDisbledItem}
            className={`${isDisbledItem ? "text-red-500 line-through" : ""} font-medium`}
          >
            {interval} %
            {
              isDisbledItem &&  <span className="m-2"> (Nghiêm Cấm)</span>
            }
          </option>
        })}
      </select>
    </form>
  );
};

export default Select;
