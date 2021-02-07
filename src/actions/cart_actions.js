import * as CartAPIUtil from "../util/cart_api_util";
import { cartLoadingOn, cartLoadingOff } from "./loading_actions";

export const RECEIVE_CART = "RECEIVE_CART";
export const RECEIVE_CART_ERRORS = "RECEIVE_CART_ERRORS";

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart,
});

export const receiveCartErrors = errors => ({
  type: RECEIVE_CART_ERRORS,
  errors,
});

export const fetchCart = id => dispatch => {
  dispatch(cartLoadingOn());
  CartAPIUtil.getCart(id)
    .then(cart => {
      dispatch(receiveCart(cart.data));
      dispatch(cartLoadingOff());
    })
    .catch(err => {
      dispatch(receiveCartErrors(err.response.data));
      dispatch(cartLoadingOff());
    });
};

export const updateCart = (itemId, cartData) => dispatch => {
  CartAPIUtil.putCart(itemId, cartData)
    .then(updatedCart => dispatch(receiveCart(updatedCart.data)))
    .catch(err => dispatch(receiveCartErrors(err.response.data)));
};

export const removeFromCart = itemId => dispatch => {
  CartAPIUtil.deleteFromCart(itemId)
    .then(updatedCart => dispatch(receiveCart(updatedCart.data)))
    .catch(err => dispatch(receiveCartErrors(err.response.data)));
};
