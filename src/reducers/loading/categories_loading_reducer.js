import {
  CATEGORIES_LOADING_ON,
  CATEGORIES_LOADING_OFF,
} from "../../actions/loading_actions";

const CategoriesLoadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CATEGORIES_LOADING_ON:
      return true;
    case CATEGORIES_LOADING_OFF:
      return false;
    default:
      return state;
  }
};

export default CategoriesLoadingReducer;
