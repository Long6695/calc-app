import { Box, Typography, Stack, Switch } from "@mui/material";
import React from "react";

const HeaderCalc = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box flex={1}>
        <Typography variant="h1">calc</Typography>
      </Box>
      <Box
        flex={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Typography variant="h4"> 1 </Typography>
          <Typography variant="h4"> 2 </Typography>
        </Stack>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Typography variant="h3" sx={{ marginRight: 5 }}>
            theme
          </Typography>
          <Switch size="medium" />
        </Stack>
      </Box>
    </Box>
  );
};

export default HeaderCalc;
