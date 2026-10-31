import { Box, type BoxProps } from "@chakra-ui/react";
import type { CSSProperties } from "react";
import { useReveal } from "@/hooks/use-reveal";

type Props = BoxProps & {
  delay?: number;
};

export function Reveal({ delay = 0, style, ...rest }: Props) {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <Box
      ref={ref}
      data-reveal=""
      data-visible={visible ? "true" : "false"}
      style={{ ...style, "--reveal-delay": delay } as CSSProperties}
      {...rest}
    />
  );
}
