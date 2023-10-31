"use client";

import { MedicineJSON } from "@/types/type";

type Props = {
  isOpen: boolean;
  options: MedicineJSON[];
  selectedOptions: MedicineJSON[];
  toggleDropdown: () => void;
  toggleOption: (e: React.MouseEvent, option: MedicineJSON) => void;
};

const MultiSelectDropdown = ({
  isOpen,
  options,
  selectedOptions,
  toggleDropdown,
  toggleOption,
}: Props) => {
  return (
    <>
      <div className="my-2 relative">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="options-menu"
            onClick={toggleDropdown}
          >
            {selectedOptions.length > 0
              ? selectedOptions.map((option, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center mx-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-black"
                  >
                    {option.title}
                  </span>
                ))
              : "使用している薬"}
          </button>
        </div>

        {isOpen && (
          <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option) => (
                <button
                  key={option.title}
                  onClick={(e) => toggleOption(e, option)}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left${
                    selectedOptions.some(
                      (selectedOption) => selectedOption.title === option.title,
                    )
                      ? " bg-gray-200"
                      : ""
                  }`}
                >
                  {option.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MultiSelectDropdown;
