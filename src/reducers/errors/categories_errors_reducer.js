import { parseErrors } from "./error_reducer_utils";
import {
  RECEIVE_CATEGORY_ERRORS,
  RECEIVE_CATEGORY,
  RECEIVE_CATEGORIES,
} from "../../actions/category_actions";

const _nullErrors = [];

const CategoryErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORY_ERRORS:
      return parseErrors(action.errors);
    case RECEIVE_CATEGORY:
      return _nullErrors;
    case RECEIVE_CATEGORIES:
      return _nullErrors;
    default:
      return state;
  }
};

export default CategoryErrorsReducer;
