export interface InitialState {
  data: any;
  isLoading: boolean;
  hasError: boolean;
}

export interface ActionTypes {
  logIn: {
    init: string;
    success: string;
    fail: string;
  };
  signUp: {
    init: string;
    success: string;
    fail: string;
  };
}
