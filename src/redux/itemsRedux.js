import { API_URL } from "../config";

//selectors
export const getItems = ({items}) => items;

//actions
const createActionName = actionName => `app/items/${actionName}`;
const ADD_ITEM = createActionName('ADD_ITEM');
const REMOVE_ITEM = createActionName('REMOVE_ITEM');
const UPDATE_ITEMS = createActionName('UPDATE_ITEMS');

//action creators
export const addItem = payload => ({type: ADD_ITEM, payload});
export const removeItem = payload => ({ type: REMOVE_ITEM, payload });
export const updateItems = payload => ({ type: UPDATE_ITEMS, payload });
export const fetchItems = () => {
  return (dispatch) => {
    fetch(API_URL + '/items/')
      .then(res => res.json())
      .then(items => dispatch(updateItems(items)));
  }
};

export const addItemRequest = item => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(item)
    };

    fetch(API_URL + '/items/', options)
      .then(() => dispatch(addItem(item)))
  }
}; 

export const removeItemRequest = itemId => {
  return (dispatch) => {
    fetch(API_URL + '/items/' + itemId, {method: 'DELETE'})
      .then(() => dispatch(removeItem(itemId)))
  }
}; 

const itemsReducer = (statePart = [], action) => {
  switch(action.type) {
    case UPDATE_ITEMS:
      return [...action.payload]
    case ADD_ITEM:
      return [...statePart, {...action.payload}]
    case REMOVE_ITEM:
      return statePart.filter(item => item.id !== action.payload);
    default:
      return statePart;
  }
};

export default itemsReducer;