import React from "react";

type Props = {
  title: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const Checkbox = ({ title, handleInputChange }: Props) => {
  return (
    <div className="my-2">
      <label>
        <input type="checkbox" name={title} onChange={handleInputChange} />
        {title}
      </label>
    </div>
  );
};

export default Checkbox;
