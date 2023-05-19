type MaskType = "register" | "date" | "phone" | "zipcode" | "onlyNumbers";

export interface MaskProps {
  onChange: (event: { target: { name: string; value: unknown } }) => void;
  name: string;
  value: string;
  mask?: MaskType;
}

export interface InputProps {
  maskType?: MaskType;
  testId?: string;
  colorIcon?: string;
  list?: { value: string; label: string }[];
  buttonRight?: React.ReactNode;
}
export interface InputTestProps extends HTMLElement {
  value?: string;
}
