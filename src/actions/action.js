import { FORM } from "../constants/reducer.constants";

export const validateForm = (data) => (dispatch) => {
  if (data) {
    dispatch({
      type: FORM.ADD_FORM,
      payload: data,
    });
    return;
  }
};

export const addCategory = (data) => (dispatch) => {
  if (data) {
    dispatch({
      type: FORM.ADD_CATEGORY,
      payload: data,
    });
    return;
  }
};

export const addCategoryInFormData = (data) => (dispatch) => {
  if (data) {
    dispatch({
      type: FORM.ADD_CATEGORY_FORM_DATA,
      payload: data,
    });
    return;
  }
};

export const editForm = (data) => (dispatch) => {
  if (data) {
    dispatch({
      type: FORM.EDIT_FORM,
      payload: data,
    });
    return;
  }
};

export const editFormData = (data) => (dispatch) => {
  if (data) {
    dispatch({
      type: FORM.EDIT_FORM_DATA,
      payload: data,
    });
    return;
  }
};
export const filterForm = (data) => (dispatch) => {
  if (data) {
    dispatch({
      type: FORM.FILTER_FORM,
      payload: data,
    });
    return;
  }
};
