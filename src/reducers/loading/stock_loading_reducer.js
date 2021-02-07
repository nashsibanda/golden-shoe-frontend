import {
  STOCKUNITS_LOADING_ON,
  STOCKUNITS_LOADING_OFF,
} from "../../actions/loading_actions";

const StockUnitsLoadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case STOCKUNITS_LOADING_ON:
      return true;
    case STOCKUNITS_LOADING_OFF:
      return false;
    default:
      return state;
  }
};

export default StockUnitsLoadingReducer;
