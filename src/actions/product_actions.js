import * as ProductAPIUtil from "../util/product_api_util";
import {
  productsLoadingOn,
  productsLoadingOff,
} from "./loading_actions";

export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCTS_COUNT = "RECEIVE_PRODUCTS_COUNT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product,
});

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const receiveProductsCount = count => ({
  type: RECEIVE_PRODUCTS_COUNT,
  count,
});

export const receiveProductErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors,
});

export const fetchAllProducts = () => dispatch => {
  dispatch(productsLoadingOn());
  ProductAPIUtil.getAllProducts()
    .then(products => {
      dispatch(receiveProducts(products.data));
      dispatch(productsLoadingOff());
    })
    .catch(err => {
      dispatch(receiveProductErrors(err.response.data));
      dispatch(productsLoadingOff());
    });
};

export const fetchRandomProducts = () => dispatch => {
  dispatch(productsLoadingOn());
  ProductAPIUtil.getRandomProducts()
    .then(products => {
      dispatch(receiveProducts(products.data));
      dispatch(productsLoadingOff());
    })
    .catch(err => {
      dispatch(receiveProductErrors(err.response.data));
      dispatch(productsLoadingOff());
    });
};


export const fetchOneProduct = id => dispatch => {
  dispatch(productsLoadingOn());
  ProductAPIUtil.getProduct(id)
    .then(product => {
      dispatch(receiveProduct(product.data));
      dispatch(productsLoadingOff());
    })
    .catch(err => {
      dispatch(receiveProductErrors(err.response.data));
      dispatch(productsLoadingOff());
    });
};

// export const updateProduct = (id, productUpdateData) => dispatch => {
//   ProductAPIUtil.putProduct(id, productUpdateData)
//     .then(product => {
//       dispatch(receiveProduct(product.data));
//     })
//     .catch(err => {
//       dispatch(receiveProductErrors(err.response.data));
//     });
// };
