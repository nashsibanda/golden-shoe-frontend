import axios from "axios";

export const getAllCategories = () => axios.get("/api/categories");

export const getCategory = id => axios.get(`/api/categories/${id}`);
