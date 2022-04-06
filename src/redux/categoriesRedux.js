import { API_URL } from "../config";

//selectors
export const getCategories = ({categories}) => categories;

//actions
const createActionName = actionName => `app/items/${actionName}`;
const ADD_CATEGORY = createActionName('ADD_CATEGORY');
// const REMOVE_ITEM = createActionName('REMOVE_ITEM');
const UPDATE_CATEGORIES = createActionName('UPDATE_CATEGORIES');

//action creators
export const addCategory = payload => ({type: ADD_CATEGORY, payload});
// export const removeItem = payload => ({ type: REMOVE_ITEM, payload });
export const updateCategories = payload => ({ type: UPDATE_CATEGORIES, payload });
export const fetchCategories = () => {
  return (dispatch) => {
    fetch(API_URL + '/categories/')
      .then(res => res.json())
      .then(categories => dispatch(updateCategories(categories)));
  }
};

export const addCategoryRequest = category => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(category)
    };

    fetch(API_URL + '/categories/', options)
      .then(() => dispatch(addCategory(category)))
  }
}; 

// export const removeItemRequest = itemId => {
//   return (dispatch) => {
//     fetch(API_URL + '/items/' + itemId, {method: 'DELETE'})
//       .then(() => dispatch(removeItem(itemId)))
//   }
// }; 

const categoriesReducer = (statePart = [], action) => {
  switch(action.type) {
    case UPDATE_CATEGORIES:
      return [...action.payload]
    case ADD_CATEGORY:
      return [...statePart, {...action.payload}]
    // case REMOVE_ITEM:
    //   return statePart.filter(item => item.id !== action.payload);
    default:
      return statePart;
  }
};

export default categoriesReducer;