import axios from "axios";

export const getStockUnit = (id) => axios.get(`/api/stock/${id}`);

export const postStockUnitToCart = id => axios.post(`/api/stock/${id}/addToCart`);
