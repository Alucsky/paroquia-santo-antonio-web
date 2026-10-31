import {
  Box,
  Container,
  Grid,
  HStack,
  Link,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import { LuInstagram, LuYoutube } from "react-icons/lu";
import { BrandLink } from "@/components/layout/brand-link";
import {
  contactNavigation,
  externalLinks,
  primaryNavigation,
} from "@/content/navigation";
import { credits, parish } from "@/content/parish";
import {
  toEmailLink,
  toPhoneLink,
  toWhatsappLink,
} from "@/utils/contact-links";

const footerLinkStyles = {
  color: "whiteAlpha.800",
  fontSize: "sm",
  _hover: { color: "white", textDecoration: "underline" },
} as const;

export function SiteFooter() {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg="ink.solid"
      color="ink.contrast"
      pt={{ base: "14", md: "20" }}
      pb={{ base: "28", md: "10" }}
      data-testid="site-footer"
    >
      <Container maxW="page" px={{ base: "5", md: "8" }}>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1.4fr 1fr 1fr",
            lg: "1.6fr 1fr 1fr 1fr",
          }}
          gap={{ base: "10", md: "12" }}
        >
          <Stack gap="5">
            <BrandLink tone="light" />
            <Text color="whiteAlpha.700" fontSize="sm" maxW="xs">
              {t("footer.tagline")}
            </Text>
            <HStack gap="3">
              <Link
                href={parish.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.instagram")}
                {...footerLinkStyles}
                p="2.5"
                rounded="full"
                borderWidth="1px"
                borderColor="whiteAlpha.300"
              >
                <LuInstagram aria-hidden="true" />
              </Link>
              <Link
                href={parish.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.youtube")}
                {...footerLinkStyles}
                p="2.5"
                rounded="full"
                borderWidth="1px"
                borderColor="whiteAlpha.300"
              >
                <LuYoutube aria-hidden="true" />
              </Link>
            </HStack>
          </Stack>

          <Stack as="nav" aria-label={t("footer.navigation")} gap="2.5">
            <Text textStyle="eyebrow" color="accent.onDark" mb="1">
              {t("footer.navigation")}
            </Text>
            {[...primaryNavigation, contactNavigation].map((item) => (
              <Link key={item.key} asChild {...footerLinkStyles}>
                <NextLink href={item.href}>
                  {t(`navigation.${item.key}`)}
                </NextLink>
              </Link>
            ))}
          </Stack>

          <Stack gap="2.5" fontSize="sm">
            <Text textStyle="eyebrow" color="accent.onDark" mb="1">
              {t("footer.contact")}
            </Text>
            <Text color="whiteAlpha.800">
              {parish.address.street} – {parish.address.district}
              <br />
              {parish.address.zipCode} · {parish.address.city}/{parish.state}
            </Text>
            <Link
              href={toPhoneLink(parish.contact.phone)}
              {...footerLinkStyles}
            >
              {parish.contact.phone}
            </Link>
            <Link
              href={toWhatsappLink(parish.contact.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              {...footerLinkStyles}
            >
              WhatsApp {parish.contact.whatsapp}
            </Link>
            <Link
              href={toEmailLink(parish.contact.email)}
              {...footerLinkStyles}
              wordBreak="break-all"
            >
              {parish.contact.email}
            </Link>
          </Stack>

          <Stack gap="2.5" hideBelow="lg">
            <Text textStyle="eyebrow" color="accent.onDark" mb="1">
              {t("footer.usefulLinks")}
            </Text>
            {externalLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                {...footerLinkStyles}
              >
                {t(`externalLinks.${link.key}`)}
              </Link>
            ))}
          </Stack>
        </Grid>

        <Separator borderColor="whiteAlpha.200" my={{ base: "10", md: "12" }} />

        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap="5"
        >
          <HStack gap="3">
            <Box bg="white" rounded="full" p="1" flexShrink="0">
              <Image
                src="/images/brand/diocese-coat-of-arms.png"
                alt=""
                width={32}
                height={32}
              />
            </Box>
            <Text fontSize="xs" color="whiteAlpha.700">
              {parish.diocese}
            </Text>
          </HStack>
          <Stack
            gap="1"
            align={{ base: "flex-start", md: "flex-end" }}
            fontSize="xs"
            color="whiteAlpha.600"
          >
            <Text>
              © {year} {parish.name}. {t("footer.rights")}
            </Text>
            <Text data-testid="site-footer-credit">
              {t("footer.developedBy")}{" "}
              <Link
                href={credits.developerUrl}
                target="_blank"
                rel="noopener noreferrer"
                color="whiteAlpha.800"
                fontWeight="700"
                _hover={{ color: "white", textDecoration: "underline" }}
              >
                {credits.developer}
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
