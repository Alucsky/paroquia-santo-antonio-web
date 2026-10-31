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
import Image from "next/image";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import type { CSSProperties } from "react";
import { LuArrowRight, LuMapPin } from "react-icons/lu";
import { UpcomingCelebrations } from "@/components/schedule/upcoming-celebrations";
import { churchImages } from "@/content/gallery";
import { parish } from "@/content/parish";
import { toMapsLink } from "@/utils/contact-links";

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
        <Box hideFrom="md" position="absolute" inset="0">
          <Image
            src={churchImages.nave.src}
            alt={t("hero.mobileImageAlt")}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "50% 30%" }}
          />
        </Box>
        <Box hideBelow="md" position="absolute" inset="0">
          <Image
            src={churchImages.facade.src}
            alt={t("hero.imageAlt")}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "50% 40%" }}
          />
        </Box>
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
              style={{ "--intro-delay": "0.8s" } as CSSProperties}
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
              style={{ "--intro-delay": "0.88s" } as CSSProperties}
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
              style={{ "--intro-delay": "0.96s" } as CSSProperties}
            >
              {t("hero.lead")}
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              gap="3"
              pt="2"
              animation="rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both"
              data-intro-delay=""
              style={{ "--intro-delay": "1.02s" } as CSSProperties}
            >
              <Button asChild size="lg" variant="solid">
                <NextLink href="/horarios">
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
            bg="paper.card"
            color="ink.fg"
            rounded="card"
            p={{ base: "5", md: "7" }}
            boxShadow="0 30px 60px -20px rgba(0,0,0,0.45)"
            animation="rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both"
            data-intro-delay=""
            style={{ "--intro-delay": "1.05s" } as CSSProperties}
          >
            <HStack justify="space-between" mb="2">
              <Text textStyle="eyebrow" color="brand.fg">
                {t("hero.upcomingTitle")}
              </Text>
              <Text fontSize="xs" color="ink.subtle">
                {t("hero.upcomingPlace")}
              </Text>
            </HStack>
            <UpcomingCelebrations limit={3} />
            <Button
              asChild
              variant="ghost"
              size="sm"
              mt="2"
              px="0"
              color="brand.fg"
              _hover={{ bg: "transparent", textDecoration: "underline" }}
            >
              <NextLink href="/horarios">
                {t("hero.fullSchedule")}
                <LuArrowRight aria-hidden="true" />
              </NextLink>
            </Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
