import { createTheme, PaletteColorOptions } from "@mui/material/styles";

/*
 Very dark desaturated blue (main background): hsl(222, 26%, 31%)
- Very dark desaturated blue (toggle background, keypad background): hsl(223, 31%, 20%)
- Very dark desaturated blue (screen background): hsl(224, 36%, 15%)
*/

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    darkBlueKeys: true;
    redKeys: true;
    lightKeys: true;
  }
}

export const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "darkBlueKeys" },
          style: {
            background: "hsl(225, 21%, 49%)",
            textTransform: "none",
            boxShadow: "hsl(224, 28%, 35%)",
          },
        },
        {
          props: { variant: "redKeys" },
          style: {
            background: "hsl(6, 63%, 50%)",
            textTransform: "none",
            boxShadow: "hsl(6, 70%, 34%)",
          },
        },
        {
          props: { variant: "lightKeys" },
          style: {
            background: "hsl(30, 25%, 89%)",
            textTransform: "none",
            boxShadow: "hsl(28, 16%, 65%)",
          },
        },
      ],
    },
  },
  palette: {
    //   background: {

    //   };
  }
});
