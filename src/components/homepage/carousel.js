import React from "react";
import LoadingSpinner from "../loading/loading_spinner";
import { Carousel, Jumbotron } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class DiscoverProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLoad: false,
      itemIndex: 0,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
    this.setState({ initialLoad: true });
  }

  handleSelect(selectedIndex, e) {
    this.setState({ itemIndex: selectedIndex });
  }

  render() {
    const { products, loading } = this.props;
    const { initialLoad, itemIndex } = this.state;

    return (
      <div className="discover products-index-container">
        <div className="resource-show-section-header">
          <Jumbotron><h2>Discover Products</h2></Jumbotron>
        </div>
        <div className="discover products-index-items">
          {!initialLoad || loading ? (
            <LoadingSpinner />
          ) : (
            <Carousel activeIndex={itemIndex} onSelect={this.handleSelect}>
            {products.map(product => (
              <Carousel.Item key={product._id}>
                <img
                  className="d-block w-100"
                  src={product.images[0].url}
                  alt={product.name}
                />
                <Carousel.Caption>
                  <h3>{product.name}</h3>
                  <p className="carousel-desc">
                    {product.description}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
            </Carousel>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(DiscoverProducts);
