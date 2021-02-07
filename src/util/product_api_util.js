import axios from 'axios';

export const getAllProducts = () => axios.get("/api/products");

export const getRandomProducts = () => axios.get("/api/products/random");

export const getProduct = id => axios.get(`/api/products/${id}`);

