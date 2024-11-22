import { FC } from "react";
import "./Input.css";

type InputProps = {
  placeholder: string;
  type?: string;
  handleOnChange: (name: string) => void;
};

export const Input: FC<InputProps> = ({
  placeholder,
  type = "text",
  handleOnChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={(e) => handleOnChange(e.target.value)}
    ></input>
  );
};
