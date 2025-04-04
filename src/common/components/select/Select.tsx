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
        disabled={disabled}
        id="time-interval-select"
        className={`rounded-md px-1 focus:outline-none bg-slate-600 translate-y-0.5 border-none cursor-pointer ${cl} text-whiteCT font-medium`}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {options.map((interval) => {
          const largestMoney = resultSttatusTrading?.largestMoney || 0

          const isDisbledItem20 = largestMoney > 4999 && interval === 20
          const isDisbledItem25 = largestMoney > 1999 && interval === 25
          const isDisbledItem30 = largestMoney > 1299 && interval === 30
          const isDisbledItem35 = largestMoney > 999 && interval === 35
          const isDisbledItem40 = largestMoney > 999 && interval === 40
          const isDisbledItem45 = largestMoney > 999 && interval === 45
          const isDisbledItem50 = largestMoney > 999  && interval === 50
          const isDisbledItem = isDisbledItem20 || isDisbledItem25 || isDisbledItem30 || isDisbledItem50 || isDisbledItem35 || isDisbledItem40 || isDisbledItem45
          
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
