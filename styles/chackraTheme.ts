import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    rainbowGray: "#7c7d7c",
    rainbowGrayLight: "#b3b3b3",
    rainbowGreen: "#c2cec9",
    rainbowGreenLight: "#c2cec9b5",
  },
  fonts: {
    body: "Inter, sans-serif", // Configura la fuente para el cuerpo del texto
    heading: "Inter, sans-serif", // Configura la fuente para los encabezados
  },
  breakpoints: {
    tablet: "@media (min-width: 768px)",
    desktop: "@media (min-width: 1024px)",
    md: "48em",
    lg: "64em",
  },
});

type Theme = typeof theme;
export type { Theme };

export default extendTheme(theme);
