export interface InitialState {
  show: string;
}

export interface Action<T> {
  type: string;
  payload: T;
}

export enum ActionType {
  CALC = "CALC",
}
