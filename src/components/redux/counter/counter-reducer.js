import types from './counter-types';

const initialState = 0;

export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      return state + payload;

    case types.DECREMENT:
      return state - payload;

    case types.RESET:
      return (state = payload);

    default:
      return state;
  }
};
