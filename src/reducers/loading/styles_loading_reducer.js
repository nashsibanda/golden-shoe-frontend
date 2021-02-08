import {
  STYLES_LOADING_ON,
  STYLES_LOADING_OFF,
} from "../../actions/loading_actions";

const StylesLoadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case STYLES_LOADING_ON:
      return true;
    case STYLES_LOADING_OFF:
      return false;
    default:
      return state;
  }
};

export default StylesLoadingReducer;
