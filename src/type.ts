export interface Item {
  id: number;
  label: string;
  key: string;
}

export enum ACTION_KEYBOARDS {
  NUM = "number",
  SIGN = "sign",
  SYSTEM = "system",
}

export type StyleType =
  | "text"
  | "lightKeys"
  | "darkBlueKeys"
  | "outlined"
  | "contained"
  | "redKeys"
  | undefined;