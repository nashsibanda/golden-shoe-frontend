import * as CategoryAPIUtil from "../util/category_api_util";
import { categoriesLoadingOn, categoriesLoadingOff } from "./loading_actions";

export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORIES_COUNT = "RECEIVE_CATEGORIES_COUNT";
export const RECEIVE_CATEGORY_ERRORS = "RECEIVE_CATEGORY_ERRORS";

export const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category,
});

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const receiveCategoriesCount = count => ({
  type: RECEIVE_CATEGORIES_COUNT,
  count,
});

export const receiveCategoryErrors = errors => ({
  type: RECEIVE_CATEGORY_ERRORS,
  errors,
});

export const fetchAllCategories = (pageNum, itemsPerPage) => dispatch => {
  dispatch(categoriesLoadingOn());
  CategoryAPIUtil.getAllCategories(pageNum, itemsPerPage)
    .then(categories => {
      dispatch(receiveCategories(categories.data));
      dispatch(categoriesLoadingOff());
    })
    .catch(err => {
      dispatch(receiveCategoryErrors(err.response.data));
      dispatch(categoriesLoadingOff());
    });
};

export const fetchOneCategory = id => dispatch => {
  dispatch(categoriesLoadingOn());
  CategoryAPIUtil.getCategory(id)
    .then(category => {
      dispatch(receiveCategory(category.data));
      dispatch(categoriesLoadingOff());
    })
    .catch(err => {
      dispatch(receiveCategoryErrors(err.response.data));
      dispatch(categoriesLoadingOff());
    });
};

// export const updateCategory = (id, categoryUpdateData) => dispatch => {
//   CategoryAPIUtil.putCategory(id, categoryUpdateData)
//     .then(category => {
//       dispatch(receiveCategory(category.data));
//     })
//     .catch(err => {
//       dispatch(receiveCategoryErrors(err.response.data));
//     });
// };
