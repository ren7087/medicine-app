"use client";
import { RadioButtonProps } from "@/types/propsType";

const RadioButton = ({
  name,
  options,
  selectedValue,
  onChange,
  onKeyDown,
}: RadioButtonProps) => {
  return (
    <div className="my-2">
      <p className="mb-1">{name}</p>
      {options.map((option) => (
        <label className="mr-2" key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
