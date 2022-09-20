import React from "react";
import { Button, Grid } from "@mui/material";

const DEL = 99;
const ADD = 98;
const SUBTRACT = 97;
const MULTIPLE = 96;
const DIVIDE = 95;
const DOT = 94;

const KEYS: {
  id: number;
  label: string;
  key: string;
}[] = [
  { id: 7, label: "7", key: "number" },
  { id: 8, label: "8", key: "number" },
  { id: 9, label: "9", key: "number" },
  { id: DEL, label: "DEL", key: "system" },
  { id: 4, label: "4", key: "number" },
  { id: 5, label: "5", key: "number" },
  { id: 6, label: "6", key: "number" },
  { id: ADD, label: "+", key: "math" },
  { id: 1, label: "1", key: "number" },
  { id: 2, label: "2", key: "number" },
  { id: 3, label: "3", key: "number" },
  { id: SUBTRACT, label: "-", key: "math" },
  { id: DOT, label: ".", key: "math" },
  { id: 0, label: "0", key: "number" },
  { id: DIVIDE, label: "/", key: "math" },
  { id: MULTIPLE, label: "x", key: "math" },
];
type type =
  | "text"
  | "lightKeys"
  | "darkBlueKeys"
  | "outlined"
  | "contained"
  | "redKeys"
  | undefined;
const styles = {
  number: "lightKeys",
  system: "darkBlueKeys",
  math: "lightKeys",
};

const Keyboards = () => {
  return (
    <Grid
      container
      sx={{
        padding: 2,
        backgroundColor: "hsl(223, 31%, 20%)",
        borderRadius: 2,
      }}
    >
      {KEYS.map((keyboard, index) => {
        const variant = styles[keyboard.key as keyof typeof styles] as type;
        return (
          <Grid item xs={3} key={index} sx={{ padding: 1 }}>
            <Button
              variant={variant}
              sx={{
                width: "100%",
                boxShadow: "inset 0 -10px 8px -8px #000000",
              }}
            >
              {keyboard.label}
            </Button>
          </Grid>
        );
      })}
      <Grid item xs={6} sx={{ padding: 1 }}>
        <Button
          sx={{ width: "100%", boxShadow: "inset 0 -10px 10px -10px #000000" }}
          variant="darkBlueKeys"
        >
          RESET
        </Button>
      </Grid>
      <Grid item xs={6} sx={{ padding: 1 }}>
        <Button
          sx={{ width: "100%", boxShadow: "inset 0 -10px 10px -10px #000000" }}
          variant="redKeys"
        >
          =
        </Button>
      </Grid>
    </Grid>
  );
};

export default Keyboards;
