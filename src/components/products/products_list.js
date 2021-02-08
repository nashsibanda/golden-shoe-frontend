import React, { Component } from "react";
import ProductTile from "./product_tile";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialLoad: false,
    };

    this.filterCategories = this.filterCategories.bind(this);
    this.filterStock = this.filterStock.bind(this);
    this.filterStyles = this.filterStyles.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
    this.props.fetchStyles();
    this.props.fetchStock();
    this.setState({ initialLoad: true });
  }

  filterCategories(product) {
    return this.props.categories.filter(cat => {
      return product.categories.some(catId => catId === cat._id);
    });
  }

  filterStock(product) {
    return this.props.stock.filter(stock => {
      return stock.productId === product._id;
    });
  }

  filterStyles(product) {
    return this.props.styles.filter(style => {
      return style.productId === product._id;
    });
  }

  render() {
    const {
      products,
      loadingProducts,
      loadingCategories,
      loadingStyles,
      loadingStock,
    } = this.props;

    return (
      <ul className="products-list">
        <h2>Featured Products</h2>
        {!loadingProducts &&
          !loadingCategories &&
          !loadingStyles &&
          !loadingStock &&
          this.state.initialLoad &&
          products.map(product => (
            <ProductTile
              product={product}
              categories={this.filterCategories(product)}
              stock={this.filterStock(product)}
              styles={this.filterStyles(product)}
              key={product._id}
            />
          ))}
      </ul>
    );
  }
}
