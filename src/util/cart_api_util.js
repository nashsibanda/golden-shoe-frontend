import axios from "axios";

export const getCart = id => axios.get(`/api/cart/`);

export const putCart = (itemId, cartData) =>
  axios.post(`/api/stock/${itemId}`, cartData);

export const deleteFromCart = (itemId) =>
  axios.delete(`/api/stock/${itemId}`);
