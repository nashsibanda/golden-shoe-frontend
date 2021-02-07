import { RECEIVE_CART } from "../../actions/stock_actions";

const CartsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CART:
      const { cart } = action;
      return Object.assign({}, state, { [cart._id]: cart });
    default:
      return state;
  }
};

export default CartsReducer;
