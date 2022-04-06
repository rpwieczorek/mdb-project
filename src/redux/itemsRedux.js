import { API_URL } from "../config";

//selectors
export const getItems = ({items}) => items;
export const getItemDataById = ({items}, itemId) => items.find(item => item.id === itemId);

//actions
const createActionName = actionName => `app/items/${actionName}`;
const ADD_ITEM = createActionName('ADD_ITEM');
const MODIFY_ITEM = createActionName('MODIFY_ITEM');
const REMOVE_ITEM = createActionName('REMOVE_ITEM');
const UPDATE_ITEMS = createActionName('UPDATE_ITEMS');

//action creators
export const addItem = payload => ({type: ADD_ITEM, payload});
export const modifyItem = payload => ({type: MODIFY_ITEM, payload});
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

export const modifyItemRequest = item => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(item)
    };

    fetch(API_URL + '/items/' + item.id, options)
      .then(() => dispatch(modifyItem(item)))
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
    case MODIFY_ITEM:
      return statePart.map((item) =>
      item.id === action.payload.id ? action.payload : item);
    case REMOVE_ITEM:
      return statePart.filter(item => item.id !== action.payload);
    default:
      return statePart;
  }
};

export default itemsReducer;