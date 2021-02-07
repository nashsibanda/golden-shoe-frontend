import {
  PRODUCTS_LOADING_ON,
  PRODUCTS_LOADING_OFF,
} from "../../actions/loading_actions";

const ProductsLoadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case PRODUCTS_LOADING_ON:
      return true;
    case PRODUCTS_LOADING_OFF:
      return false;
    default:
      return state;
  }
};

export default ProductsLoadingReducer;
