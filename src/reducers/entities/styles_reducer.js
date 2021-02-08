import {
  RECEIVE_STYLE,
  RECEIVE_STYLES,
} from "../../actions/style_actions";

const StylesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STYLES:
      const stylesOutput = {};
      action.styles.forEach(cat => {
        stylesOutput[cat._id] = cat;
      });
      return action.styles;
    case RECEIVE_STYLE:
      const { style } = action;
      return Object.assign({}, state, { [style._id]: style });
    default:
      return state;
  }
};

export default StylesReducer;
