import { Box, Heading, Stack, type StackProps, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

type Props = Omit<StackProps, "title"> & {
  icon?: IconType;
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
};

export function InfoCard({
  icon: CardIcon,
  eyebrow,
  title,
  children,
  ...rest
}: Props) {
  return (
    <Stack
      gap="4"
      bg="paper.card"
      borderWidth="1px"
      borderColor="line.hairline"
      rounded="card"
      p={{ base: "5", md: "7" }}
      h="full"
      {...rest}
    >
      {CardIcon ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxSize="11"
          rounded="full"
          bg="brand.subtle"
          color="brand.fg"
        >
          <CardIcon size="20" aria-hidden="true" />
        </Box>
      ) : null}
      <Stack gap="1">
        {eyebrow ? (
          <Text textStyle="eyebrow" color="brand.fg">
            {eyebrow}
          </Text>
        ) : null}
        <Heading
          as="h3"
          fontFamily="heading"
          fontWeight="600"
          fontSize={{ base: "xl", md: "2xl" }}
          letterSpacing="-0.02em"
        >
          {title}
        </Heading>
      </Stack>
      {children}
    </Stack>
  );
}
