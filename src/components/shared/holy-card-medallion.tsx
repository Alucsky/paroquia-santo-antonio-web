import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "brand" | "ink" | "accent";
};

const tones = {
  brand: { bg: "brand.solid", color: "gold.200" },
  ink: { bg: "ink.solid", color: "accent.onDark" },
  accent: { bg: "accent.solid", color: "ink.fg" },
} as const;

export function HolyCardMedallion({ children, tone = "brand" }: Props) {
  return (
    <Box
      position="absolute"
      inset="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt="2"
      bg={tones[tone].bg}
      color={tones[tone].color}
      backgroundImage="radial-gradient(circle at 50% 30%, rgba(255,255,255,0.18), transparent 60%)"
    >
      {children}
    </Box>
  );
}
