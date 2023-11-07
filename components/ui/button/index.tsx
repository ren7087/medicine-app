"use client";
import { ClickButtonProps, SubmitButtonProps } from "@/types/propsType";

export const ClickButton = ({ type, onClick, children }: ClickButtonProps) => {
  return (
    <button
      className={`text-md font-bold w-32 ml-2 px-2 py-2 rounded-lg border ${
        type === "primary"
          ? `border-blue-600 bg-blue-500 text-white`
          : `border-gray-300 bg-gray-100 text-black`
      } cursor-pointer hover:opacity-70`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const SubmitButton = ({ type, children }: SubmitButtonProps) => {
  return (
    <button
      className={`text-md font-bold w-32 ml-2 px-2 py-2 rounded-lg border ${
        type === "primary"
          ? `border-blue-600 bg-blue-500 text-white`
          : `border-gray-300 bg-gray-100 text-black`
      } cursor-pointer hover:opacity-70`}
      type="submit"
    >
      {children}
    </button>
  );
};
