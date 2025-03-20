import { combineReducers } from 'redux';
import authReducer from './authSlice';

// Ví dụ: một reducer đơn giản
const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Kết hợp các reducer (nếu có nhiều reducer)
const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

export default rootReducer;