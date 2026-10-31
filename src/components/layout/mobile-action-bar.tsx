import { Box, Grid, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import type { IconType } from "react-icons";
import { LuClock3, LuMapPin, LuMessageCircle } from "react-icons/lu";
import { parish } from "@/content/parish";
import { routes } from "@/content/routes";
import { toMapsLink, toWhatsappLink } from "@/utils/contact-links";

type Action = {
  key: string;
  href: string;
  icon: IconType;
  external?: boolean;
};

const actions: Action[] = [
  { key: "schedule", href: routes.schedule, icon: LuClock3 },
  {
    key: "whatsapp",
    href: toWhatsappLink(parish.contact.whatsapp),
    icon: LuMessageCircle,
    external: true,
  },
  {
    key: "directions",
    href: toMapsLink(parish.coordinates.latitude, parish.coordinates.longitude),
    icon: LuMapPin,
    external: true,
  },
];

export function MobileActionBar() {
  const { t } = useTranslation("common");

  return (
    <Box
      as="nav"
      aria-label={t("quickBar.label")}
      position="fixed"
      insetX="3"
      bottom="calc(env(safe-area-inset-bottom) + 0.75rem)"
      zIndex="docked"
      hideFrom="md"
      bg="ink.solid"
      color="ink.contrast"
      rounded="full"
      boxShadow="0 18px 40px -12px rgba(26, 21, 17, 0.55)"
      p="1.5"
      data-testid="mobile-action-bar"
    >
      <Grid templateColumns="repeat(3, 1fr)" gap="1">
        {actions.map(({ key, href, icon: ActionIcon, external }) => {
          const content = (
            <>
              <ActionIcon aria-hidden="true" size="18" />
              <Text as="span" fontSize="xs" fontWeight="700">
                {t(`quickBar.${key}`)}
              </Text>
            </>
          );
          const styles = {
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5",
            minH: "12",
            rounded: "full",
            color: "inherit",
            _hover: { bg: "whiteAlpha.200", textDecoration: "none" },
          };
          return external ? (
            <Link
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              {...styles}
            >
              {content}
            </Link>
          ) : (
            <Link key={key} asChild {...styles}>
              <NextLink href={href}>{content}</NextLink>
            </Link>
          );
        })}
      </Grid>
    </Box>
  );
}
