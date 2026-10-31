import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import {
  LuMapPin,
  LuMessageCircle,
  LuNavigation,
  LuPhone,
} from "react-icons/lu";
import { Reveal } from "@/components/shared/reveal";
import { parish } from "@/content/parish";
import {
  toMapsLink,
  toPhoneLink,
  toWazeLink,
  toWhatsappLink,
} from "@/utils/contact-links";

export function VisitSection() {
  const { t } = useTranslation("common");
  const { latitude, longitude } = parish.coordinates;

  return (
    <Box as="section" py={{ base: "16", md: "24" }} data-testid="visit-section">
      <Container maxW="page" px={{ base: "5", md: "8" }}>
        <Reveal>
          <Grid
            templateColumns={{ base: "1fr", lg: "1.2fr 1fr" }}
            gap={{ base: "8", lg: "12" }}
            bg="brand.solid"
            color="white"
            rounded={{ base: "2xl", md: "3xl" }}
            p={{ base: "7", md: "14" }}
            position="relative"
            overflow="hidden"
          >
            <Box
              aria-hidden="true"
              position="absolute"
              right="-20"
              bottom="-24"
              boxSize="80"
              rounded="full"
              borderWidth="40px"
              borderColor="whiteAlpha.100"
            />
            <Stack gap="5" position="relative">
              <Text textStyle="eyebrow" color="gold.200">
                {t("visit.eyebrow")}
              </Text>
              <Heading
                as="h2"
                textStyle="display"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="500"
                textWrap="balance"
              >
                {t("visit.title")}
              </Heading>
              <Stack gap="1" color="whiteAlpha.900">
                <Text display="flex" gap="2" alignItems="flex-start">
                  <Box as="span" mt="1" flexShrink="0">
                    <LuMapPin aria-hidden="true" />
                  </Box>
                  <span>
                    {parish.address.street} – {parish.address.district},{" "}
                    {parish.address.city}/{parish.state}
                  </span>
                </Text>
              </Stack>
            </Stack>
            <Stack gap="3" justify="center" position="relative">
              <Button
                asChild
                variant="light"
                size="lg"
                justifyContent="space-between"
              >
                <a
                  href={toMapsLink(latitude, longitude)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("visit.googleMaps")}
                  <LuMapPin aria-hidden="true" />
                </a>
              </Button>
              <Button
                asChild
                variant="light"
                size="lg"
                justifyContent="space-between"
              >
                <a
                  href={toWazeLink(latitude, longitude)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("visit.waze")}
                  <LuNavigation aria-hidden="true" />
                </a>
              </Button>
              <Grid templateColumns="1fr 1fr" gap="3">
                <Button asChild variant="ink" size="lg">
                  <a
                    href={toWhatsappLink(parish.contact.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuMessageCircle aria-hidden="true" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="ink" size="lg">
                  <a href={toPhoneLink(parish.contact.phone)}>
                    <LuPhone aria-hidden="true" />
                    {t("visit.call")}
                  </a>
                </Button>
              </Grid>
            </Stack>
          </Grid>
        </Reveal>
      </Container>
    </Box>
  );
}
