import {
  RECEIVE_STOCKUNIT,
  RECEIVE_STOCKUNITS,
} from "../../actions/stock_actions";

const StockUnitsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STOCKUNITS:
      const stockUnitsOutput = {};
      action.stockUnits.forEach(stock => {
        stockUnitsOutput[stock._id] = stock;
      });
      return stockUnitsOutput;
    case RECEIVE_STOCKUNIT:
      const { stockUnit } = action;
      return Object.assign({}, state, { [stockUnit._id]: stockUnit });
    default:
      return state;
  }
};

export default StockUnitsReducer;
