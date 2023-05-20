import { SelectHTMLAttributes } from "react";

interface IItem {
  id: string;
  value: string;
}

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  items: IItem[];
}
