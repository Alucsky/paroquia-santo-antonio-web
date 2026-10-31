import { defineConfig } from "@chakra-ui/react";
import { gold, parchment, terracotta, umber } from "./color-palettes";
import { buttonRecipe } from "./recipes/button";

const scale = (palette: Record<number, string>) =>
  Object.fromEntries(
    Object.entries(palette).map(([step, value]) => [step, { value }]),
  );

export const themeConfig = defineConfig({
  globalCss: {
    "html, body": {
      bg: "paper.canvas",
      color: "ink.fg",
    },
  },
  theme: {
    tokens: {
      colors: {
        terracotta: scale(terracotta),
        gold: scale(gold),
        umber: scale(umber),
        parchment: { value: parchment },
      },
      fonts: {
        heading: { value: "var(--font-fraunces), Georgia, serif" },
        body: { value: "var(--font-manrope), system-ui, sans-serif" },
      },
      spacing: {
        "18": { value: "4.5rem" },
        "22": { value: "5.5rem" },
        "30": { value: "7.5rem" },
      },
      sizes: {
        page: { value: "76rem" },
        prose: { value: "42rem" },
      },
      radii: {
        card: { value: "1.25rem" },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.terracotta.600}" },
          emphasized: { value: "{colors.terracotta.700}" },
          contrast: { value: "white" },
          fg: { value: "{colors.terracotta.700}" },
          subtle: { value: "{colors.terracotta.50}" },
          muted: { value: "{colors.terracotta.100}" },
          focusRing: { value: "{colors.gold.500}" },
        },
        accent: {
          solid: { value: "{colors.gold.400}" },
          fg: { value: "{colors.gold.700}" },
          subtle: { value: "{colors.gold.50}" },
          muted: { value: "{colors.gold.100}" },
          onDark: { value: "{colors.gold.300}" },
        },
        ink: {
          solid: { value: "{colors.umber.950}" },
          emphasized: { value: "{colors.umber.800}" },
          contrast: { value: "{colors.umber.50}" },
          fg: { value: "{colors.umber.950}" },
          muted: { value: "{colors.umber.700}" },
          subtle: { value: "{colors.umber.600}" },
        },
        paper: {
          canvas: { value: "{colors.umber.50}" },
          subtle: { value: "{colors.umber.100}" },
          muted: { value: "{colors.umber.200}" },
          card: { value: "white" },
          holy: { value: "{colors.parchment}" },
        },
        frame: {
          gold: { value: "{colors.gold.500}" },
        },
        line: {
          hairline: { value: "{colors.umber.200}" },
          strong: { value: "{colors.umber.950}" },
        },
      },
    },
    textStyles: {
      eyebrow: {
        value: {
          fontFamily: "body",
          fontSize: "xs",
          fontWeight: "800",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
        },
      },
      display: {
        value: {
          fontFamily: "heading",
          fontWeight: "600",
          letterSpacing: "-0.03em",
          lineHeight: "0.98",
        },
      },
    },
    keyframes: {
      rise: {
        from: { opacity: 0, transform: "translateY(24px)" },
        to: { opacity: 1, transform: "translateY(0)" },
      },
      marquee: {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-50%)" },
      },
      floatY: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-8px)" },
      },
      pulseRing: {
        from: { opacity: 0.6, transform: "scale(1)" },
        to: { opacity: 0, transform: "scale(3)" },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
});
