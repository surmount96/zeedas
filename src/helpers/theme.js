import { extendTheme } from "@chakra-ui/react";

const CC = {
  fonts: {
    heading: '"Inter"',
    body: '"Nunito Sans",sans-serif',
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "24px",
    xl: "32px",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  colors: {
    brand: {
      100: "#052231",
      150: "#03293D80",
      160: "#03293D1A",
      170: "#03293D0D",
      200: "#23B3E8",

      black: {
        100: "#13161D",
      },

      gray: {
        50: "#F9F9F9",
        100: "#F7F7F7E5",
        150: "#D3D4D6",
        200: "#E5E6E8",
      },
      orange: {
        100: "#F15832",
      },
      purple: {
        100: "#826AF9",
      },
      red: {
        100: "#F15832",
        150: "#F158321A",
      },

      green: {
        100: "#4DBD98",
        150: "#4DBD981A",
      },
    },
  },
};

export const CustomTheme = extendTheme({ ...CC });
