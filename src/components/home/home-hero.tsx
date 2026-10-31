import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { getImageProps } from "next/image";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import type { CSSProperties } from "react";
import { LuArrowRight, LuMapPin } from "react-icons/lu";
import { NextCelebration } from "@/components/home/next-celebration";
import { churchImages } from "@/content/gallery";
import { parish } from "@/content/parish";
import { routes } from "@/content/routes";
import { toMapsLink } from "@/utils/contact-links";

const sharedImageProps = {
  alt: "",
  fill: true,
  priority: true,
  sizes: "100vw",
};

const { props: desktopImage } = getImageProps({
  ...sharedImageProps,
  src: churchImages.facade.src,
});

const { props: mobileImage } = getImageProps({
  ...sharedImageProps,
  src: churchImages.nave.src,
});

export function HomeHero() {
  const { t } = useTranslation("home");

  return (
    <Box
      as="section"
      position="relative"
      bg="ink.solid"
      data-testid="home-hero"
    >
      <Box position="absolute" inset="0" overflow="hidden">
        <picture>
          <source media="(min-width: 48em)" srcSet={desktopImage.srcSet} />
          <img
            {...mobileImage}
            alt={sharedImageProps.alt}
            style={{
              ...mobileImage.style,
              objectFit: "cover",
              objectPosition: "50% 35%",
            }}
          />
        </picture>
        <Box
          position="absolute"
          inset="0"
          bg="linear-gradient(180deg, rgba(26,21,17,0.35) 0%, rgba(26,21,17,0.55) 45%, rgba(26,21,17,0.94) 100%)"
        />
      </Box>

      <Container maxW="page" px={{ base: "5", md: "8" }} position="relative">
        <Grid
          templateColumns={{ base: "1fr", lg: "1.35fr 1fr" }}
          gap={{ base: "8", lg: "16" }}
          alignItems="end"
          minH={{ base: "calc(100svh - 4rem)", md: "auto" }}
          pt={{ base: "28", md: "40", lg: "48" }}
          pb={{ base: "8", md: "16" }}
        >
          <Stack gap={{ base: "5", md: "7" }} color="white">
            <HStack
              gap="3"
              animation="rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both"
              data-intro-delay=""
              style={{ "--intro-delay": "1.1s" } as CSSProperties}
            >
              <Box h="1px" w="8" bg="accent.onDark" />
              <Text textStyle="eyebrow" color="accent.onDark">
                {t("hero.eyebrow", { year: parish.foundedYear })}
              </Text>
            </HStack>
            <Heading
              as="h1"
              textStyle="display"
              fontSize={{ base: "5xl", sm: "6xl", md: "7xl", xl: "8xl" }}
              fontWeight="500"
              textWrap="balance"
              animation="rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both"
              data-intro-delay=""
              style={{ "--intro-delay": "1.18s" } as CSSProperties}
            >
              {t("hero.titleLead")}{" "}
              <Text as="span" fontStyle="italic" color="accent.onDark">
                {t("hero.titleHighlight")}
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "md", md: "xl" }}
              color="whiteAlpha.800"
              maxW="xl"
              textWrap="pretty"
              animation="rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both"
              data-intro-delay=""
              style={{ "--intro-delay": "1.26s" } as CSSProperties}
            >
              {t("hero.lead")}
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              gap="3"
              pt="2"
              animation="rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both"
              data-intro-delay=""
              style={{ "--intro-delay": "1.32s" } as CSSProperties}
            >
              <Button asChild size="lg" variant="solid">
                <NextLink href={routes.schedule}>
                  {t("hero.primaryAction")}
                  <LuArrowRight aria-hidden="true" />
                </NextLink>
              </Button>
              <Button asChild size="lg" variant="light">
                <a
                  href={toMapsLink(
                    parish.coordinates.latitude,
                    parish.coordinates.longitude,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuMapPin aria-hidden="true" />
                  {t("hero.secondaryAction")}
                </a>
              </Button>
            </Stack>
          </Stack>

          <Box
            animation="rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both"
            data-intro-delay=""
            style={{ "--intro-delay": "1.35s" } as CSSProperties}
          >
            <NextCelebration />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
