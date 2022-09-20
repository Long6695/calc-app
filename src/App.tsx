import React from "react";
import { Box, Container, Stack } from "@mui/material";
import HeaderCalc from "./components/HeaderCalc";
import InputCalc from "./components/InputCalc";
import Keyboards from "./components/Keyboards";

function App() {
  return (
    <Container maxWidth="xs">
      <Box bgcolor="hsl(222, 26%, 31%)" sx={{ padding: 4, marginTop: 5 }}>
        <Stack direction="column" spacing={4}>
          <HeaderCalc />
          <InputCalc />
          <Keyboards />
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
