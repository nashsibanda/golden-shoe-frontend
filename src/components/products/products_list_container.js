import { connect } from "react-redux";
import { fetchAllCategories } from "../../actions/category_actions";
import { fetchAllProducts } from "../../actions/product_actions";
import { fetchAllStock } from "../../actions/stock_actions";
import { fetchAllStyles } from "../../actions/style_actions";
import ProductsList from "./products_list";

const mapStateToProps = state => ({
  products: state.entities.products,
  loadingProducts: state.loading.products,
  loadingCategories: state.loading.categories,
  categories: state.entities.categories,
  loadingStyles: state.loading.styles,
  styles: state.entities.styles,
  loadingStock: state.loading.stock,
  stock: state.entities.stock
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchAllProducts()),
  fetchCategories: () => dispatch(fetchAllCategories()),
  fetchStyles: () => dispatch(fetchAllStyles()),
  fetchStock: () => dispatch(fetchAllStock()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
