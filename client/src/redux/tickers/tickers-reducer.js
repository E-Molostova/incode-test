import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getTickersRequest,
  getTickersSuccess,
  getTickersError,
} from "./tickers-actions";

const initialState = [];

const tickers = createReducer(initialState, {
  [getTickersSuccess]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [getTickersRequest]: () => true,
  [getTickersSuccess]: () => false,
  [getTickersError]: () => false,
});

const error = createReducer("", {
  [getTickersError]: (_, { payload }) => payload,
  [getTickersRequest]: () => "",
});

const tickerReducers = combineReducers({
  tickers,
  loading,
  error,
});

export default tickerReducers;
