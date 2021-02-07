import {
  RECEIVE_PRODUCT,
  RECEIVE_PRODUCTS,
} from "../../actions/product_actions";

const ProductsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      const productsOutput = {};
      action.products.forEach(prod => {
        productsOutput[prod._id] = prod;
      });
      return action.products;
    case RECEIVE_PRODUCT:
      const { product } = action;
      return Object.assign({}, state, { [product._id]: product });
    default:
      return state;
  }
};

export default ProductsReducer;
