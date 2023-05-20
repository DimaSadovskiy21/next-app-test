import { RootState } from 'store';

export const dateSelector = (state: RootState) => state.dateReducer.date;
export const dateFormatSelector = (state: RootState) => state.dateReducer.dateFormat;
export const timeFormatSelector = (state: RootState) => state.dateReducer.timeFormat;
