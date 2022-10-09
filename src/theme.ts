import { createTheme } from "@mui/material/styles";

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
  breakpoints: {
    values: {
      // extra-small
      xs: 375,
      // small
      sm: 600,
      // medium
      md: 900,
      // large
      lg: 1200,
      // extra-large
      xl: 1536,
    },
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined", disabled: true },
          style: {
            borderRadius: "5px",
            backgroundColor: "hsl(224, 36%, 15%)",
            fontSize: "30px",
            fontWeight: "700",
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" },
          style: {
            fontWeight: "700",
            fontSize: "26px",
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontWeight: "700",
            fontSize: "16px",
            textTransform: "uppercase",
          },
        },
        {
          props: { variant: "h4" },
          style: {
            fontWeight: "700",
            fontSize: "14px",
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "darkBlueKeys" },
          style: {
            background: "hsl(225, 21%, 49%)",
            textTransform: "none",
            boxShadow: "hsl(224, 28%, 35%)",
            color: "#fff",
            height: "60px",
            width: "60px",
            fontWeight: "700",
            fontSize: "18px",
          },
        },
        {
          props: { variant: "redKeys" },
          style: {
            background: "hsl(6, 63%, 50%)",
            textTransform: "none",
            boxShadow: "hsl(6, 70%, 34%)",
            color: "#fff",
            height: "60px",
            width: "60px",
            fontWeight: "700",
            fontSize: "22px",
          },
        },
        {
          props: { variant: "lightKeys" },
          style: {
            background: "hsl(30, 25%, 89%)",
            textTransform: "none",
            boxShadow: "hsl(28, 16%, 65%)",
            color: "hsl(221, 14%, 31%)",
            height: "60px",
            width: "60px",
            fontWeight: "700",
            fontSize: "25px",
          },
        },
      ],
    },
  },
  palette: {
    background: {
      default: "gray",
    },
    text: {
      primary: "#fff",
    },
  },
  typography: {
    fontFamily: ["League Spartan"].join(","),
  },
});
