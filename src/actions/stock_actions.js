import * as StockUnitAPIUtil from "../util/stock_api_util";
import { stockUnitsLoadingOn, stockUnitsLoadingOff } from "./loading_actions";

export const RECEIVE_STOCKUNIT = "RECEIVE_STOCKUNIT";
export const RECEIVE_STOCKUNITS = "RECEIVE_STOCKUNITS";
export const RECEIVE_STOCKUNIT_ERRORS = "RECEIVE_STOCKUNIT_ERRORS";
export const RECEIVE_CART = "RECEIVE_CART";

export const receiveStockUnit = stockUnit => ({
  type: RECEIVE_STOCKUNIT,
  stockUnit,
});

export const receiveStockUnits = stockUnits => ({
  type: RECEIVE_STOCKUNITS,
  stockUnits,
});

export const receiveStockUnitErrors = errors => ({
  type: RECEIVE_STOCKUNIT_ERRORS,
  errors,
});

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
})

export const fetchOneStockUnit = id => dispatch => {
  dispatch(stockUnitsLoadingOn());
  StockUnitAPIUtil.getStockUnit(id)
    .then(stockUnit => {
      dispatch(receiveStockUnit(stockUnit.data));
      dispatch(stockUnitsLoadingOff());
    })
    .catch(err => {
      dispatch(receiveStockUnitErrors(err.response.data));
      dispatch(stockUnitsLoadingOff());
    });
};

export const addStockToCart = id => dispatch => {
  StockUnitAPIUtil.postStockUnitToCart(id)
    .then(comment => dispatch(receiveCart(comment.data)))
    .catch(err => dispatch(receiveStockUnitErrors(err.response.data)));
};