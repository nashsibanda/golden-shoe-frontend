import { combineReducers } from "redux";
import ProductsLoadingReducer from "./loading/products_loading_reducer";
import CategoriesLoadingReducer from "./loading/categories_loading_reducer";
import StockUnitsLoadingReducer from "./loading/stock_loading_reducer";
import SessionLoadingReducer from "./loading/session_loading_reducer";
import StylesLoadingReducer from "./loading/styles_loading_reducer";

const LoadingReducer = combineReducers({
  products: ProductsLoadingReducer,
  categories: CategoriesLoadingReducer,
  styles: StylesLoadingReducer,
  stock: StockUnitsLoadingReducer,
  session: SessionLoadingReducer,
});

export default LoadingReducer;
