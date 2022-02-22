import { InitialState } from "./types";
import { actionTypes } from "./actionCreators";

const initialState: InitialState = {
  data: {},
  isLoading: false,
  hasError: false,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.logIn.init: {
      const { isLoading, hasError } = action.payload;
      return {
        ...state,
        isLoading,
        hasError,
      };
    }
    case actionTypes.logIn.fail: {
      const { isLoading, hasError } = action.payload;
      return {
        ...state,
        isLoading,
        hasError,
      };
    }
    case actionTypes.logIn.success: {
      const { hasError, isLoading, data } = action.payload;
      return {
        ...state,
        data,
        isLoading,
        hasError,
      };
    }

    case actionTypes.signUp.init: {
      const { isLoading, hasError } = action.payload;
      return {
        ...state,
        isLoading,
        hasError,
      };
    }
    case actionTypes.signUp.fail: {
      const { isLoading, hasError } = action.payload;
      return {
        ...state,
        isLoading,
        hasError,
      };
    }
    case actionTypes.signUp.success: {
      const { hasError, isLoading, data } = action.payload;
      return {
        ...state,
        data,
        isLoading,
        hasError,
      };
    }

    default:
      return state;
  }
};
