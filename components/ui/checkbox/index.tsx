import { CheckboxProps } from "@/types/propsType";

const Checkbox = ({ title, handleInputChange }: CheckboxProps) => {
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
