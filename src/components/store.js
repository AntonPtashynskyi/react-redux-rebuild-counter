import { combineReducers, createStore } from 'redux';
import { counterReducer } from './redux/counter/counter-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);

export default store;
