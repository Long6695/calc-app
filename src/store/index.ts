import { Action, ActionType, InitialState } from "./type";

export const initialState: InitialState = {
  show: "",
};

export const reducer = (state: InitialState, action: Action<string>) => {
  switch (action.type) {
    case ActionType.CALC:
      return (state = { ...state, show: action.payload });
    default:
      return state;
  }
};
