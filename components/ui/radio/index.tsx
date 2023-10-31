"use client";

type RadioButtonProps = {
  name: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = ({
  name,
  options,
  selectedValue,
  onChange,
}: RadioButtonProps) => {
  return (
    <div className="my-2">
      <p>{name}:</p>
      {options.map((option) => (
        <label className="mr-2" key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;