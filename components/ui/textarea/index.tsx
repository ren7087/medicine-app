import React from "react";

type Props = {
  title: string;
  placeholder?: string;
  value: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const Textarea = ({ title, placeholder, value, handleInputChange }: Props) => {
  return (
    <div className="my-2">
      <label>
        {title}:
        <textarea
          className="ml-2 w-full border-2 border-gray-300 rounded-md"
          rows={5}
          name={title}
          onChange={handleInputChange}
          placeholder={placeholder}
          value={value}
        />
      </label>
    </div>
  );
};

export default Textarea;
