import React, { Component } from "react";

export default class ProductTile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.getPriceRange = this.getPriceRange.bind(this);
    this.getStock = this.getStock.bind(this);
  }

  getPriceRange() {
    const { stock } = this.props;
    if (stock.length === 0) {
      return "Out of Stock";
    } else if (stock.length === 1) {
      return `£${stock[0].price["$numberDecimal"]}`;
    } else {
      const prices = stock.map(st => parseFloat(st.price["$numberDecimal"]));
      return `£${Math.min(...prices)} - £${Math.max(...prices)}`;
    }
  }
  
  getStock() {
    const { stock } = this.props;
    if (stock.length === 0) {
      return 0;
    } else {
      const inventory = stock.map(st => st.inventory).reduce((cur, acc) => cur + acc, 0);
      return inventory;
    }
  }

  render() {
    const { product, stock, styles } = this.props;
    const { name, images } = product;
    return (
      <li className="product-tile">
        <img src={images[0].url} alt={name} />
        <div className="title-row">
          <h3 className="name">{name}</h3>
          <span className="price-range">{this.getPriceRange()}</span>
        </div>
        <div className="info">
          <div>
            <div className="info-label"># in Stock</div>
            <div className={`info-stat ${stock.length === 0 ? "" : "good"}`}>
              {this.getStock()}
            </div>
          </div>
          <div>
            <div className="info-label">Styles</div>
            <div className={`info-stat ${styles.length <= 1 ? "" : "good"}`}>
              {styles.length > 1 ? styles.length : 1}
            </div>
          </div>
        </div>
      </li>
    );
  }
}
