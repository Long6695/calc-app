import React from "react";
import { Button, Grid } from "@mui/material";
import { Item, StyleType } from "../type";
import { Action, ActionType } from "../store/type";
import { KEYS } from "../dummy/keyboards";

const styles = {
  number: "lightKeys",
  system: "darkBlueKeys",
  sign: "lightKeys",
};

interface Props {
  onClick: (item: Item) => void;
  data: string;
  onDispatch: React.Dispatch<Action<string>>;
}

const Keyboards = ({ onClick, data, onDispatch }: Props) => {
  const onClickLocal = (item: Item) => {
    onClick(item);
  };

  const onEqual = () => {
    data = data.replace("x", "*");
    try {
      onDispatch({ type: ActionType.CALC, payload: eval(data.toString()) });
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert(e.message);
      }
    }
  };

  const onReset = () => {
    onDispatch({ type: ActionType.CALC, payload: "" });
  }

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
        const variant = styles[
          keyboard.key as keyof typeof styles
        ] as StyleType;
        return (
          <Grid item xs={3} key={index} sx={{ padding: 1 }}>
            <Button
              onClick={() => onClickLocal(keyboard)}
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
          onClick={onReset}
        >
          RESET
        </Button>
      </Grid>
      <Grid item xs={6} sx={{ padding: 1 }}>
        <Button
          sx={{ width: "100%", boxShadow: "inset 0 -10px 10px -10px #000000" }}
          variant="redKeys"
          onClick={onEqual}
        >
          =
        </Button>
      </Grid>
    </Grid>
  );
};

export default Keyboards;
