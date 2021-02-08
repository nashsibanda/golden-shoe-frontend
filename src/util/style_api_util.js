import axios from "axios";

export const getAllStyles = () => axios.get("/api/styles");

export const getStyle = id => axios.get(`/api/styles/${id}`);
