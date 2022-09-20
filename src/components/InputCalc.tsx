import { FormControl, TextField } from "@mui/material";
import React from "react";

const InputCalc = () => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <TextField variant="outlined" disabled/>
    </FormControl>
  );
};

export default InputCalc;
