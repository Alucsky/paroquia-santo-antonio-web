import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { LuCheck, LuShare2 } from "react-icons/lu";
import { Reveal } from "@/components/shared/reveal";
import { saintPortrait } from "@/content/gallery";
import { copyText } from "@/utils/copy-text";

const COPIED_FEEDBACK_MS = 2500;

export function SaintPrayer() {
  const { t } = useTranslation("saint");
  const lines = t("prayer.lines", { returnObjects: true }) as string[];
  const [copied, setCopied] = useState(false);
  const [firstLine, ...otherLines] = lines;
  const prayerText = [t("prayer.title"), ...lines, t("prayer.closing")].join(
    "\n",
  );

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), COPIED_FEEDBACK_MS);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const sharePrayer = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: t("prayer.title"), text: prayerText });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      }
    }
    setCopied(await copyText(prayerText));
  };

  return (
    <Box
      as="section"
      py={{ base: "16", md: "28" }}
      bg="paper.subtle"
      data-testid="saint-prayer"
    >
      <Container maxW="5xl" px={{ base: "4", md: "8" }}>
        <Reveal>
          <Box
            bg="paper.holy"
            p={{ base: "2.5", md: "3" }}
            boxShadow="0 30px 60px -30px rgba(26, 21, 17, 0.45), 0 2px 6px rgba(26, 21, 17, 0.08)"
          >
            <Box borderWidth="1px" borderColor="frame.gold" p="1.5">
              <Grid
                borderWidth="1px"
                borderColor="frame.gold"
                templateColumns={{ base: "1fr", md: "auto 1fr" }}
                gap={{ base: "8", md: "14" }}
                alignItems="center"
                px={{ base: "5", md: "12" }}
                py={{ base: "10", md: "14" }}
                position="relative"
              >
                {(["left", "right"] as const).map((side) => (
                  <Text
                    key={side}
                    as="span"
                    aria-hidden="true"
                    position="absolute"
                    top="2"
                    {...{ [side]: "3" }}
                    fontSize="sm"
                    color="frame.gold"
                  >
                    ✦
                  </Text>
                ))}
                <Stack align="center" gap="3">
                  <Box
                    position="relative"
                    w={{ base: "9rem", md: "13rem" }}
                    h={{ base: "12rem", md: "18rem" }}
                    borderWidth="2px"
                    borderColor="frame.gold"
                    borderTopRadius="full"
                    borderBottomRadius="sm"
                    overflow="hidden"
                    boxShadow="0 16px 30px -18px rgba(26, 21, 17, 0.6)"
                  >
                    <Image
                      src={saintPortrait.src}
                      alt={t("portrait.alt")}
                      fill
                      sizes="(min-width: 768px) 13rem, 9rem"
                      style={{ objectFit: "cover", objectPosition: "50% 22%" }}
                    />
                  </Box>
                  <Text
                    textStyle="eyebrow"
                    fontSize="2xs"
                    letterSpacing="0.2em"
                    color="ink.subtle"
                    textAlign="center"
                  >
                    {t("prayer.patronLabel")}
                  </Text>
                </Stack>

                <Stack
                  gap="5"
                  align={{ base: "center", md: "start" }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  <Text
                    textStyle="eyebrow"
                    fontSize="2xs"
                    letterSpacing="0.2em"
                    color="brand.fg"
                  >
                    — {t("prayer.eyebrow")} —
                  </Text>
                  <Heading
                    as="h2"
                    fontFamily="heading"
                    fontStyle="italic"
                    fontWeight="500"
                    fontSize={{ base: "3xl", md: "5xl" }}
                    letterSpacing="-0.02em"
                    lineHeight="1.05"
                    textWrap="balance"
                  >
                    {t("prayer.title")}
                  </Heading>
                  <Box
                    aria-hidden="true"
                    h="1px"
                    w="16"
                    bg="frame.gold"
                    opacity="0.8"
                  />
                  <Stack
                    gap="2.5"
                    fontFamily="heading"
                    fontSize={{ base: "lg", md: "xl" }}
                    lineHeight="1.55"
                    color="ink.muted"
                    textWrap="pretty"
                  >
                    <Text
                      css={{
                        "&::first-letter": {
                          float: "left",
                          fontSize: "3.4em",
                          lineHeight: "0.85",
                          paddingRight: "0.08em",
                          marginTop: "0.06em",
                          color: "brand.fg",
                          fontStyle: "italic",
                        },
                      }}
                    >
                      {firstLine}
                    </Text>
                    {otherLines.map((line) => (
                      <Text key={line}>{line}</Text>
                    ))}
                  </Stack>
                  <Text
                    fontFamily="heading"
                    fontStyle="italic"
                    fontSize={{ base: "xl", md: "2xl" }}
                    color="brand.fg"
                  >
                    {t("prayer.closing")}
                  </Text>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={sharePrayer}
                    aria-live="polite"
                    data-testid="saint-prayer-share"
                  >
                    {copied ? (
                      <LuCheck aria-hidden="true" />
                    ) : (
                      <LuShare2 aria-hidden="true" />
                    )}
                    {copied ? t("prayer.copied") : t("prayer.share")}
                  </Button>
                </Stack>
              </Grid>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
