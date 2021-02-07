import { combineReducers } from "redux";
import ProductsErrorsReducer from "./errors/products_errors_reducer";
import CategoriesErrorsReducer from "./errors/categories_errors_reducer";
import SessionErrorsReducer from "./errors/session_errors_reducer";
import CartErrorsReducer from "./errors/cart_errors_reducer";
import StockUnitErrorsReducer from "./errors/stock_errors_reducer";

const ErrorsReducer = combineReducers({
  products: ProductsErrorsReducer,
  categories: CategoriesErrorsReducer,
  session: SessionErrorsReducer,
  cart: CartErrorsReducer,
  stockUnit: StockUnitErrorsReducer,
});

export default ErrorsReducer;
