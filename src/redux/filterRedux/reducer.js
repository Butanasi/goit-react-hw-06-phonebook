import { filterContact } from './action';
import { createReducer } from '@reduxjs/toolkit';

export const filterReducer = createReducer('', {
  [filterContact]: (state, { payload }) => (state, payload),
});
