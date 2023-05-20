import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IDateState } from './types';

const initialState: IDateState = {
  date: new Date(),
  dateFormat: 'yyyy.mm.dd',
  timeFormat: '24-hours',
};

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDate(state, action: PayloadAction<Date>) {
      state.date = action.payload;
    },
    setDateFormat(state, action: PayloadAction<string>) {
      state.dateFormat = action.payload;
    },
    setTimeFormat(state, action: PayloadAction<string>) {
      state.timeFormat = action.payload;
    },
  },
});

export const { setDate, setDateFormat, setTimeFormat } = dateSlice.actions;

export default dateSlice.reducer;
