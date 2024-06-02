import { extendTheme } from "@chakra-ui/react";
import '@fontsource-variable/arimo';

const colors = {
  primary: {
    100: "#d2fded", /* mint */
    200: "#1c5858", /* forest */
    300: "#e4ccf7", /* pale lavender */
    400: "#a78fba", /* dark lavender  */
    500: "#61DBFB", /*  */
    600: "#0A864F", /*  */
    700: "#086F42", /*  */
    800: "#075C37", /*  */
    900: "#064C2E", /*  */
  },
};

const fonts = {
  body: `'Arimo Variable', sans-serif`,
  // body: `'Noto Serif TC', serif`,
};

const customTheme = extendTheme({ colors, fonts });

export default customTheme;
