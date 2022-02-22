import { Dispatch } from "redux";

import { ActionTypes } from "./types";

export const actionTypes: ActionTypes = {
  logIn: {
    init: "cb/ login init",
    success: "cb/ login success",
    fail: "cb/ login fail",
  },
  signUp: {
    init: "cb/ signUp init",
    success: "cb/ signUp success",
    fail: "cb/ signUp fail",
  },
};

const Loginit = () => ({
  type: actionTypes.logIn.init,
  payload: {
    isLoading: true,
    hasError: false,
  },
});

const Logfail = () => ({
  type: actionTypes.logIn.fail,
  payload: {
    isLoading: false,
    hasError: true,
  },
});

const Logsuccess = (data: any) => ({
  type: actionTypes.logIn.success,
  payload: {
    isLoading: false,
    hasError: false,
    data,
  },
});

export function logIn(payload: any, navigate: any) {
  return async (dispatch: Dispatch) => {
    dispatch(Loginit());
    try {
      const dataJson = await fetch("http://localhost:8080/cambridge/log-in", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          eMail: payload.email,
          fullName: payload.fullname,
          password: payload.password,
        }),
      });
      const data = await dataJson.json();
      if (!data.error) {
        dispatch(Logsuccess(data));
        localStorage.setItem('cambridge-l3000', data.token)
        navigate("/dashboard/main");
        return;
      }
      dispatch(Logfail());
    } catch (error) {
      dispatch(Logfail());
    }
  };
}

const signUpInit = () => ({
  type: actionTypes.signUp.init,
  payload: {
    isLoading: true,
    hasError: false,
  },
});

const signUpFail = () => ({
  type: actionTypes.signUp.fail,
  payload: {
    isLoading: false,
    hasError: true,
  },
});

const signUpSuccess = (data: any) => ({
  type: actionTypes.signUp.success,
  payload: {
    isLoading: false,
    hasError: false,
    data,
  },
});

export function signUp(payload: any, navigate: any) {
  return async (dispatch: Dispatch) => {
    dispatch(signUpInit());
    try {
      const dataJson = await fetch("http://localhost:8080/cambridge/sign-up", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          eMail: payload.email,
          fullName: payload.fullname,
          password: payload.password,
        }),
      });
      const data = await dataJson.json();
      if (!data.error) {
        dispatch(signUpSuccess(data));
        localStorage.setItem('cambridge-l3000', data.token)
        navigate("/dashboard/main");
        return;
      }
      dispatch(signUpFail());
    } catch (error) {
      dispatch(signUpFail());
    }
  };
}
