import { combineReducers } from "redux";
import ProductsReducer from "./entities/products_reducer";
import CategoriesReducer from "./entities/categories_reducer";
import CartReducer from "./entities/cart_reducer";

const EntitiesReducer = combineReducers({
  products: ProductsReducer,
  categories: CategoriesReducer,
  cart: CartReducer,
});

export default EntitiesReducer;
