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
    <div className="my-4 p-1 pb-4 shadow-md rounded-lg">
      <p className="mb-3 font-semibold text-center text-gray-700">{name}</p>
      <div className="flex justify-center flex-wrap gap-2 items-center">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center bg-blue-100 p-2 rounded-xl cursor-pointer hover:bg-blue-200"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
              onKeyDown={onKeyDown}
              className="form-radio h-5 w-5 border-gray-300 focus:ring-0"
            />
            <span className="ml-2 text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
