import { parseErrors } from "./error_reducer_utils";
import {
  RECEIVE_PRODUCT_ERRORS,
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCTS,
} from "../../actions/product_actions";

const _nullErrors = [];

const ProductErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT_ERRORS:
      return parseErrors(action.errors);
    case RECEIVE_PRODUCT:
      return _nullErrors;
    case RECEIVE_PRODUCTS:
      return _nullErrors;
    default:
      return state;
  }
};

export default ProductErrorsReducer;
