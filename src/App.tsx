import React, { useReducer } from "react";
import { Box, Container, Stack } from "@mui/material";
import HeaderCalc from "./components/HeaderCalc";
import InputCalc from "./components/InputCalc";
import Keyboards from "./components/Keyboards";
import { reducer, initialState } from "./store";
import { ACTION_KEYBOARDS, Item } from "./type";
import { ActionType } from "./store/type";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onClick = (item: Item) => {
    if (item.key === ACTION_KEYBOARDS.SIGN) {
      const signKey = ["x", "/", "-", "+"];
      if (signKey.some((el) => state.show[state.show.length - 1] === el)) {
        dispatch({
          type: ActionType.CALC,
          payload: state.show.replace(
            state.show[state.show.length - 1],
            item.label
          ),
        });
        return;
      }
    }
    if (item.key === ACTION_KEYBOARDS.SYSTEM) {
      const deleteLastChar = state.show.slice(0, -1);
      dispatch({ type: ActionType.CALC, payload: deleteLastChar });
      return;
    }
    dispatch({
      type: ActionType.CALC,
      payload: state.show + item.label,
    });
  };

  return (
    <Container maxWidth="xs">
      <Box bgcolor="hsl(222, 26%, 31%)" sx={{ padding: 4, marginTop: 5 }}>
        <Stack direction="column" spacing={4}>
          <HeaderCalc />
          <InputCalc data={state.show} />
          <Keyboards
            data={state.show}
            onDispatch={dispatch}
            onClick={onClick}
          />
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
