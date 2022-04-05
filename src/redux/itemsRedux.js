//selectors
export const getItems = ({items}) => items;

//actions
const createActionName = actionName => `app/items/${actionName}`;
const ADD_ITEM = createActionName('ADD_ITEM');
const REMOVE_ITEM = createActionName('REMOVE_ITEM');

//action creators
export const addItem = payload => ({type: ADD_ITEM, payload});
export const removeItem = payload => ({ type: REMOVE_ITEM, payload });

const itemsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_ITEM:
      return [...statePart, {...action.payload}]
    case REMOVE_ITEM:
      return statePart.filter(item => item.id !== action.payload);
    default:
      return statePart;
  }
};

export default itemsReducer;