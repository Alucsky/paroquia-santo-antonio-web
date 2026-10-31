import { Box, type BoxProps } from "@chakra-ui/react";

export function BrandMark(props: BoxProps) {
  return (
    <Box as="span" display="inline-flex" color="brand.solid" {...props}>
      <svg
        viewBox="0 0 48 48"
        width="100%"
        height="100%"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M6 44V26C6 14.5 14 5.5 24 3c10 2.5 18 11.5 18 23v18"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 44h44"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M24 15v21M17 22h14"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
}
