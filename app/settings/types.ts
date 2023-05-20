import { ChangeEvent } from 'react';

interface IItem {
  id: string;
  value: string;
}

export interface ISettingProps {
  timeFormat: string;
  dateFormat: string;
  dateFormatItems: IItem[];
  timeFormatItems: IItem[];
  handleChangeDateFormat: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleChangeTimeFormat: (e: ChangeEvent<HTMLSelectElement>) => void;
}
