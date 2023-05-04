import { extendTheme } from "@chakra-ui/react";

const CustomTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        // bg: "gray.400",
        // color: "white",
        fontFamily: "Open Sans",
        // fontSize: "8"
        // lineHeight: "body",
      },
      // styles for the `a`
      //   a: {
      //     color: "teal.500",
      //     _hover: {
      //       textDecoration: "underline",
      //     },
      //   },
    },
  },
  //   fontFamily: {
  // myFonts: {
  //   100: "Helvetica Neue",
  //   // fontWeight: 400,
  //   // fontSize: "1rem",
  // },
  //   fontSize: {
  //     brand: {
  //       xs: "0.75rem",
  //       sm: "0.875rem",
  //       base: "1rem",
  //       lg: "1.125rem",
  //       xl: "1.25rem",
  //       "2xl": "1.5rem",
  //       "3xl": "1.875rem",
  //       "4xl": "2.25rem",
  //       "5xl": "3rem",
  //       "6xl": "4rem",
  //     },
  //   },
  //   },
});

export default CustomTheme;
