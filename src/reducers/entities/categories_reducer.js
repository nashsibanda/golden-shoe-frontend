import {
  RECEIVE_CATEGORY,
  RECEIVE_CATEGORIES,
} from "../../actions/category_actions";

const CategoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      const categoriesOutput = {};
      action.categories.forEach(cat => {
        categoriesOutput[cat._id] = cat;
      });
      return action.categories;
    case RECEIVE_CATEGORY:
      const { category } = action;
      return Object.assign({}, state, { [category._id]: category });
    default:
      return state;
  }
};

export default CategoriesReducer;
