import { parseErrors } from "./error_reducer_utils";
import {
  RECEIVE_STOCKUNIT_ERRORS,
  RECEIVE_STOCKUNIT,
  RECEIVE_STOCKUNITS,
} from "../../actions/stock_actions";

const _nullErrors = [];

const StockUnitErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STOCKUNIT_ERRORS:
      return parseErrors(action.errors);
    case RECEIVE_STOCKUNIT:
      return _nullErrors;
    case RECEIVE_STOCKUNITS:
      return _nullErrors;
    default:
      return state;
  }
};

export default StockUnitErrorsReducer;
