import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import type { CSSProperties } from "react";
import { saintPortrait } from "@/content/gallery";

export function SaintHero() {
  const { t } = useTranslation("saint");

  return (
    <Box
      as="section"
      bg="ink.solid"
      color="white"
      position="relative"
      overflow="hidden"
      data-testid="saint-hero"
    >
      <Box
        aria-hidden="true"
        position="absolute"
        top="-40"
        right={{ base: "-40", md: "10%" }}
        boxSize={{ base: "96", md: "xl" }}
        rounded="full"
        bg="radial-gradient(circle, rgba(221,185,99,0.28), rgba(221,185,99,0) 65%)"
      />
      <Container maxW="page" px={{ base: "5", md: "8" }} position="relative">
        <Grid
          templateColumns={{ base: "1fr", md: "1.1fr 0.9fr" }}
          gap={{ base: "10", md: "16" }}
          alignItems="center"
          py={{ base: "12", md: "24" }}
        >
          <Stack gap={{ base: "5", md: "7" }} order={{ base: 2, md: 1 }}>
            <HStack gap="3">
              <Box h="1px" w="8" bg="accent.onDark" />
              <Text textStyle="eyebrow" color="accent.onDark">
                {t("hero.eyebrow")}
              </Text>
            </HStack>
            <Heading
              as="h1"
              textStyle="display"
              fontWeight="500"
              fontSize={{ base: "5xl", sm: "6xl", md: "7xl", xl: "8xl" }}
              animation="rise 0.8s cubic-bezier(0.2,0.7,0.2,1) both"
              data-intro-delay=""
              style={{ "--intro-delay": "0.85s" } as CSSProperties}
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
            >
              {t("hero.lead")}
            </Text>
            <HStack gap={{ base: "6", md: "10" }} pt="2" wrap="wrap">
              {(["born", "died", "feast"] as const).map((key) => (
                <Box key={key}>
                  <Text
                    textStyle="eyebrow"
                    fontSize="2xs"
                    color="whiteAlpha.600"
                  >
                    {t(`hero.facts.${key}.label`)}
                  </Text>
                  <Text
                    fontFamily="heading"
                    fontSize={{ base: "xl", md: "2xl" }}
                    mt="1"
                  >
                    {t(`hero.facts.${key}.value`)}
                  </Text>
                </Box>
              ))}
            </HStack>
          </Stack>
          <Box
            as="figure"
            order={{ base: 1, md: 2 }}
            m="0"
            maxW={{ base: "18rem", sm: "sm", md: "full" }}
            mx={{ base: "auto", md: "0" }}
            w="full"
          >
            <Box
              rounded="card"
              overflow="hidden"
              boxShadow="0 40px 80px -30px rgba(0,0,0,0.8)"
              animation="rise 0.9s cubic-bezier(0.2,0.7,0.2,1) both"
              data-intro-delay=""
              style={{ "--intro-delay": "0.95s" } as CSSProperties}
            >
              <Image
                src={saintPortrait.src}
                alt={t("portrait.alt")}
                width={saintPortrait.width}
                height={saintPortrait.height}
                priority
                sizes="(min-width: 768px) 40vw, 18rem"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            <Text
              as="figcaption"
              fontSize="xs"
              color="whiteAlpha.600"
              mt="3"
              lineHeight="1.5"
            >
              {t("portrait.caption")}{" "}
              <Link
                href={saintPortrait.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                color="whiteAlpha.800"
                textDecoration="underline"
              >
                {t("portrait.source")}
              </Link>
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
