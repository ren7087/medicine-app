export type RadioButtonProps = {
  name: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export type TextAreaProps = {
  title: string;
  placeholder?: string;
  value: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export type CheckboxProps = {
  title: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export type ClickButtonProps = {
  type: "primary" | "secondary";
  onClick: () => void;
  children: React.ReactNode;
};

export type SubmitButtonProps = {
  type: "primary" | "secondary";
  children: React.ReactNode;
};
