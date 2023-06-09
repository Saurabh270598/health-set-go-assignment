import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { initialState } from "../constants/initialState.constants";
import { FORM } from "../constants/reducer.constants";

export const FormReducer = (state = initialState.formData, action) => {
  const { type, payload } = action;
  switch (type) {
    case FORM.ADD_FORM: {
      return {
        ...state,
        list: [...state.list, payload],
        category: "default",
      };
    }
    case FORM.ADD_CATEGORY: {
      return {
        ...state,
        categoryList: [...state.categoryList, payload],
      };
    }
    case FORM.ADD_CATEGORY_FORM_DATA: {
      return {
        ...state,
        category: payload,
      };
    }
    case FORM.EDIT_FORM: {
      return {
        ...state,
        isEdit: true,
        editId: payload,
      };
    }
    case FORM.EDIT_FORM_DATA: {
      const data = payload;
      return {
        ...state,
        isEdit: false,
        editId: "",
        list: state.list.map((item) => {
          if (item.id === data.id) {
            return data; // Update the existing item
          }
          return item; // Keep other items unchanged
        }),
        category: "default",
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  formData: FormReducer,
});

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
