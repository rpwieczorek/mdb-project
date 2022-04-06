import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import itemsReducer from './itemsRedux';
import categoriesReducer from './categoriesRedux';

const subreducers = {
  items: itemsReducer,
  categories: categoriesReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;