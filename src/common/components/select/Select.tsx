interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  cl?: string;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, cl }) => {
  return (
    <form className="inline-block ml-3">
      <select
        id="time-interval-select"
        className={`rounded-md px-1 bg-slate-500 translate-y-0.5 border-none cursor-pointer ${cl} text-whiteCT`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((interval) => (
          <option key={interval} value={interval}>
            {interval}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Select;
