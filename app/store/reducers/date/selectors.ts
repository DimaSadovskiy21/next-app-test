import { RootState } from '@/app/store';

export const dateFormatSelector = (state: RootState) => state.dateReducer.dateFormat;
export const timeFormatSelector = (state: RootState) => state.dateReducer.timeFormat;
