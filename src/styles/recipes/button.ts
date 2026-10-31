import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "700",
    borderRadius: "full",
    letterSpacing: "-0.01em",
    transitionProperty: "background, color, box-shadow, transform",
    transitionDuration: "moderate",
    _active: { transform: "translateY(1px)" },
    _focusVisible: {
      outline: "3px solid",
      outlineColor: "brand.focusRing",
      outlineOffset: "3px",
    },
  },
  variants: {
    variant: {
      solid: {
        bg: "brand.solid",
        color: "brand.contrast",
        _hover: { bg: "brand.emphasized" },
      },
      ink: {
        bg: "ink.solid",
        color: "ink.contrast",
        _hover: { bg: "ink.emphasized" },
      },
      outline: {
        borderWidth: "2px",
        borderColor: "ink.solid",
        color: "ink.solid",
        bg: "transparent",
        _hover: { bg: "ink.solid", color: "ink.contrast" },
      },
      light: {
        bg: "white",
        color: "ink.solid",
        _hover: { bg: "paper.subtle" },
      },
      ghost: {
        bg: "transparent",
        color: "ink.solid",
        _hover: { bg: "paper.muted" },
      },
    },
    size: {
      sm: { h: "10", minW: "10", px: "4", textStyle: "sm", gap: "2" },
      md: { h: "12", minW: "12", px: "6", textStyle: "md", gap: "2" },
      lg: { h: "14", minW: "14", px: "8", textStyle: "md", gap: "3" },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});
