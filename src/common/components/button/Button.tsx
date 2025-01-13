import { FunctionComponent, ReactNode } from "react";

interface ButtonProps {
  text?: string;
  classCT?: string;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  text,
  children,
  disabled = false,
  classCT,
  onClick,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`
        hover:scale-105 
        duration-300 
        ease-in-out
        font-medium
        text-sm rounded-lg 
        text-[25px] 
        px-8 py-3 
        mb-2 
        focus:outline-none 
        bg-blue-700 
        flex items-center
        ${classCT}
      `}
    >
      <span>{text}</span>
      {children}
    </button>
  );
};

export default Button;
