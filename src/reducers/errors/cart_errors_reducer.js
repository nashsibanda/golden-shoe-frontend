import { parseErrors } from "./error_reducer_utils";
import {
  RECEIVE_CART_ERRORS,
  RECEIVE_CART,
} from "../../actions/cart_actions";

const _nullErrors = [];

const CartErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART_ERRORS:
      return parseErrors(action.errors);
    case RECEIVE_CART:
      return _nullErrors;
    default:
      return state;
  }
};

export default CartErrorsReducer;
