import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Inter",
        fontSize: "12px",
        color: "white",
      },
    },
  },
  fonts: {
    myFonts: {
      200: "Epilogue",
    },
  },
  fontSizes: {
    myfontSize: {
      xs: "0.75rem",
      sm: "12px",
      base: "18px",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
  },
  colors: {
    primary: {
      50: "#59BA70FF",
      100: "#765AB1FF",
    },
  },
});

export default CustomTheme;
