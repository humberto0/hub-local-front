import { createTheme, SimplePaletteColorOptions } from "@mui/material/styles";
import { remToPx } from "../../utils/remToPx.utils";
import { BREAKPOINTS_VALUES } from "./breakpoints.theme";
import { FONT_SIZES } from "./fontSizes.theme";
import { FONT_WEIGHTS } from "./fontWeights.theme";
import { spacing } from "./spacing.theme";
import { HEX } from "./hex.theme";

declare module "@mui/material/styles" {
  type Hex = typeof HEX;
  type FontSizes = typeof FONT_SIZES;
  type Spacing = typeof spacing;

  interface Palette {
    hex: Hex;
    neutral?: PaletteOptions["neutral"];
  }

  interface PaletteOptions {
    hex: Hex;
    neutral?: SimplePaletteColorOptions;
  }

  interface Breakpoints {
    mediaMinXs: string;
    mediaMaxXs: string;
    mediaMinSm: string;
    mediaMaxSm: string;
    mediaMinMd: string;
    mediaMaxMd: string;
    mediaMinLg: string;
    mediaMaxLg: string;
    mediaMinXl: string;
    mediaMaxXl: string;
  }

  interface Container {
    body: string;
    content: string;
  }

  interface TypographyVariantsOptions {
    fontSizes: FontSizes;
    fontWeightSemiBold: React.CSSProperties["fontWeight"];
  }

  interface TypographyVariants {
    fontSizes: FontSizes;
    fontWeightSemiBold: React.CSSProperties["fontWeight"];
  }

  interface ShadowsExtended {
    primary: string;
    secondary: string;
  }

  interface ThemeOptions {
    space: Spacing;
    container: Container;
    shadowExtended: ShadowsExtended;
  }

  interface Theme {
    space: Spacing;
    container: Container;
    shadowExtended: ShadowsExtended;
  }
}

export const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: BREAKPOINTS_VALUES.xs,
      sm: BREAKPOINTS_VALUES.sm,
      md: BREAKPOINTS_VALUES.md,
      lg: BREAKPOINTS_VALUES.lg,
      xl: BREAKPOINTS_VALUES.xl,
    },
    mediaMinXs: `(min-width: ${BREAKPOINTS_VALUES.xs}px)`,
    mediaMaxXs: `(max-width: ${BREAKPOINTS_VALUES.xs}px)`,
    mediaMinSm: `(min-width: ${BREAKPOINTS_VALUES.sm}px)`,
    mediaMaxSm: `(max-width: ${BREAKPOINTS_VALUES.sm}px)`,
    mediaMinMd: `(min-width: ${BREAKPOINTS_VALUES.md}px)`,
    mediaMaxMd: `(max-width: ${BREAKPOINTS_VALUES.md}px)`,
    mediaMinLg: `(min-width: ${BREAKPOINTS_VALUES.lg}px)`,
    mediaMaxLg: `(max-width: ${BREAKPOINTS_VALUES.lg}px)`,
    mediaMinXl: `(min-width: ${BREAKPOINTS_VALUES.xl}px)`,
    mediaMaxXl: `(max-width: ${BREAKPOINTS_VALUES.xl}px)`,
  },
  container: {
    body: spacing.S1600,
    content: spacing.S1200,
  },
  typography: {
    fontSizes: FONT_SIZES,
    fontFamily: "Poppins, sans-serif",
    fontSize: remToPx(FONT_SIZES.A400),
    fontWeightLight: FONT_WEIGHTS.light,
    fontWeightMedium: FONT_WEIGHTS.medium,
    fontWeightRegular: FONT_WEIGHTS.regular,
    fontWeightSemiBold: FONT_WEIGHTS.semiBold,
    fontWeightBold: FONT_WEIGHTS.bold,
    h1: {
      fontSize: FONT_SIZES.A6000,
      fontWeight: FONT_WEIGHTS.bold,
    },
    h2: {
      fontSize: FONT_SIZES.A1150,
      fontWeight: FONT_WEIGHTS.bold,
      color: "#000",
    },
    h3: {
      fontSize: spacing.S13,
    },
  },
  palette: {
    mode: "light",
    hex: HEX,
    primary: {
      main: "#0385FD",
    },
    secondary: {
      main: "#00CC99",
      contrastText: "#fff",
    },
    error: {
      main: "#C90808",
    },
  },
  space: spacing,
  shadowExtended: {
    primary: `0 0 ${spacing.S12} rgba(0, 0, 0, 0.16)`,
    secondary: `0 0 0 ${spacing.S032} rgba(136, 165, 191, 0.48)`,
  },
});
