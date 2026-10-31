import {
  Box,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import type { IconType } from "react-icons";
import { LuBaby, LuBookOpen, LuFlower2, LuShirt } from "react-icons/lu";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const symbols: { key: string; icon: IconType }[] = [
  { key: "child", icon: LuBaby },
  { key: "book", icon: LuBookOpen },
  { key: "lily", icon: LuFlower2 },
  { key: "habit", icon: LuShirt },
];

export function PaintingSymbols() {
  const { t } = useTranslation("saint");

  return (
    <Box
      as="section"
      bg="paper.subtle"
      py={{ base: "16", md: "28" }}
      data-testid="painting-symbols"
    >
      <Container maxW="page" px={{ base: "5", md: "8" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1.4fr" }}
          gap={{ base: "10", lg: "16" }}
          alignItems="start"
        >
          <Reveal>
            <SectionHeading
              eyebrow={t("symbols.eyebrow")}
              title={t("symbols.title")}
              lead={t("symbols.lead")}
            />
          </Reveal>
          <SimpleGrid columns={{ base: 1, sm: 2 }} gap={{ base: "3", md: "5" }}>
            {symbols.map(({ key, icon: SymbolIcon }, index) => (
              <Reveal key={key} delay={index}>
                <Stack
                  gap="4"
                  bg="paper.card"
                  rounded="card"
                  p={{ base: "5", md: "7" }}
                  h="full"
                  borderWidth="1px"
                  borderColor="line.hairline"
                  data-testid="painting-symbols-card"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxSize="11"
                    rounded="full"
                    bg="accent.subtle"
                    color="accent.fg"
                  >
                    <SymbolIcon size="20" aria-hidden="true" />
                  </Box>
                  <Heading
                    as="h3"
                    fontFamily="heading"
                    fontWeight="600"
                    fontSize="xl"
                    letterSpacing="-0.02em"
                  >
                    {t(`symbols.items.${key}.title`)}
                  </Heading>
                  <Text color="ink.muted" fontSize="sm">
                    {t(`symbols.items.${key}.description`)}
                  </Text>
                </Stack>
              </Reveal>
            ))}
          </SimpleGrid>
        </Grid>
      </Container>
    </Box>
  );
}
