import { Box, Button, Container, Grid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import { LuArrowRight } from "react-icons/lu";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { saintPortrait } from "@/content/gallery";
import { routes } from "@/content/routes";

export function PatronFeature() {
  const { t } = useTranslation("home");

  return (
    <Box
      as="section"
      bg="ink.solid"
      color="white"
      py={{ base: "16", md: "28" }}
      overflow="hidden"
      data-testid="patron-feature"
    >
      <Container maxW="page" px={{ base: "5", md: "8" }}>
        <Grid
          templateColumns={{ base: "1fr", md: "0.9fr 1.1fr" }}
          gap={{ base: "10", md: "16" }}
          alignItems="center"
        >
          <Reveal
            position="relative"
            maxW={{ base: "xs", md: "md" }}
            mx={{ base: "auto", md: "0" }}
            w="full"
          >
            <Box
              position="absolute"
              inset="0"
              transform="translate(14px, 14px)"
              borderWidth="1px"
              borderColor="accent.onDark"
              rounded="card"
              aria-hidden="true"
            />
            <Box
              position="relative"
              rounded="card"
              overflow="hidden"
              animation="floatY 8s ease-in-out infinite"
            >
              <Image
                src={saintPortrait.src}
                alt={t("patron.imageAlt")}
                width={saintPortrait.width}
                height={saintPortrait.height}
                sizes="(min-width: 768px) 28rem, 20rem"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
          </Reveal>
          <Reveal delay={1}>
            <Stack gap="8">
              <SectionHeading
                tone="light"
                eyebrow={t("patron.eyebrow")}
                title={t("patron.title")}
                lead={t("patron.lead")}
              />
              <Box
                as="blockquote"
                borderLeftWidth="2px"
                borderColor="accent.onDark"
                pl="5"
              >
                <Text
                  fontFamily="heading"
                  fontStyle="italic"
                  fontSize={{ base: "xl", md: "2xl" }}
                  lineHeight="1.35"
                >
                  “{t("patron.quote")}”
                </Text>
                <Text mt="3" fontSize="sm" color="whiteAlpha.700">
                  {t("patron.quoteSource")}
                </Text>
              </Box>
              <Box>
                <Button asChild variant="light" size="lg">
                  <NextLink href={routes.saintAnthony}>
                    {t("patron.action")}
                    <LuArrowRight aria-hidden="true" />
                  </NextLink>
                </Button>
              </Box>
            </Stack>
          </Reveal>
        </Grid>
      </Container>
    </Box>
  );
}
