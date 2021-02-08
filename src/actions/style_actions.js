import * as StyleAPIUtil from "../util/style_api_util";
import { stylesLoadingOn, stylesLoadingOff } from "./loading_actions";

export const RECEIVE_STYLE = "RECEIVE_STYLE";
export const RECEIVE_STYLES = "RECEIVE_STYLES";
export const RECEIVE_STYLES_COUNT = "RECEIVE_STYLES_COUNT";
export const RECEIVE_STYLE_ERRORS = "RECEIVE_STYLE_ERRORS";

export const receiveStyle = style => ({
  type: RECEIVE_STYLE,
  style,
});

export const receiveStyles = styles => ({
  type: RECEIVE_STYLES,
  styles,
});

export const receiveStylesCount = count => ({
  type: RECEIVE_STYLES_COUNT,
  count,
});

export const receiveStyleErrors = errors => ({
  type: RECEIVE_STYLE_ERRORS,
  errors,
});

export const fetchAllStyles = (pageNum, itemsPerPage) => dispatch => {
  dispatch(stylesLoadingOn());
  StyleAPIUtil.getAllStyles(pageNum, itemsPerPage)
    .then(styles => {
      dispatch(receiveStyles(styles.data));
      dispatch(stylesLoadingOff());
    })
    .catch(err => {
      dispatch(receiveStyleErrors(err.response.data));
      dispatch(stylesLoadingOff());
    });
};

export const fetchOneStyle = id => dispatch => {
  dispatch(stylesLoadingOn());
  StyleAPIUtil.getStyle(id)
    .then(style => {
      dispatch(receiveStyle(style.data));
      dispatch(stylesLoadingOff());
    })
    .catch(err => {
      dispatch(receiveStyleErrors(err.response.data));
      dispatch(stylesLoadingOff());
    });
};
