import { FormControl, TextField } from "@mui/material";
import React from "react";

interface Props {
  data: string;
}

const InputCalc = ({ data }: Props) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <TextField
        value={data}
        variant="outlined"
        disabled
        sx={{
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "white",
          },
        }}
      />
    </FormControl>
  );
};

export default InputCalc;
