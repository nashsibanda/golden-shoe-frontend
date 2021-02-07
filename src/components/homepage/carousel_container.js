import { fetchRandomProducts } from "../../actions/product_actions";
import { connect } from "react-redux";
import DiscoverProducts from "./carousel";

const mapStateToProps = state => ({
  products: state.entities.products,
  loading: state.loading.products,
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () =>
    dispatch(fetchRandomProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverProducts);
