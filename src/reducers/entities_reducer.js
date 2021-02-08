import { combineReducers } from "redux";
import ProductsReducer from "./entities/products_reducer";
import CategoriesReducer from "./entities/categories_reducer";
import StylesReducer from "./entities/styles_reducer";
import CartReducer from "./entities/cart_reducer";
import StockUnitsReducer from "./entities/stock_reducer";

const EntitiesReducer = combineReducers({
  products: ProductsReducer,
  categories: CategoriesReducer,
  styles: StylesReducer,
  stock: StockUnitsReducer,
  cart: CartReducer,
});

export default EntitiesReducer;
