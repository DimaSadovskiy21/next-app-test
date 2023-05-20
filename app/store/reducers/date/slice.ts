'use client';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IDateState } from './types';

const initialState: IDateState = {
  dateFormat: 'yyyy.mm.dd',
  timeFormat: '24-hours',
};

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setDateFormat(state, action: PayloadAction<string>) {
      state.dateFormat = action.payload;
    },
    setTimeFormat(state, action: PayloadAction<string>) {
      state.timeFormat = action.payload;
    },
  },
});

export const { setDateFormat, setTimeFormat } = dateSlice.actions;

export default dateSlice.reducer;
