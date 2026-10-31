import {
  Box,
  CloseButton,
  Drawer,
  IconButton,
  Link,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { LuArrowUpRight, LuMenu } from "react-icons/lu";
import { BrandLink } from "@/components/layout/brand-link";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { NavLink } from "@/components/layout/nav-link";
import { contactNavigation, primaryNavigation } from "@/content/navigation";
import { parish } from "@/content/parish";
import { toWhatsappLink } from "@/utils/contact-links";

export function MobileMenu() {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (asPath) setOpen(false);
  }, [asPath]);

  const items = [
    { key: "home", href: "/" },
    ...primaryNavigation,
    contactNavigation,
  ];

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(details) => setOpen(details.open)}
      size="full"
      placement="end"
    >
      <Drawer.Trigger asChild>
        <IconButton
          variant="ghost"
          aria-label={t("menu.open")}
          size="md"
          hideFrom="lg"
          data-testid="mobile-menu-trigger"
        >
          <LuMenu />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bg="paper.canvas" data-testid="mobile-menu-content">
            <Drawer.Header
              borderBottomWidth="1px"
              borderColor="line.hairline"
              py="3"
              px="5"
            >
              <BrandLink />
              <Drawer.CloseTrigger asChild position="static" ms="auto">
                <CloseButton size="md" aria-label={t("menu.close")} />
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body
              px="5"
              py="6"
              display="flex"
              flexDirection="column"
              gap="8"
            >
              <Stack as="nav" aria-label={t("menu.label")} gap="0">
                {items.map((item, index) => (
                  <NavLink
                    key={item.key}
                    href={item.href}
                    fontFamily="heading"
                    fontSize="3xl"
                    fontWeight="500"
                    letterSpacing="-0.02em"
                    py="2.5"
                    borderBottomWidth="1px"
                    borderColor="line.hairline"
                    display="flex"
                    alignItems="baseline"
                    gap="4"
                    color="ink.fg"
                    _currentPage={{ color: "brand.fg" }}
                  >
                    <Text
                      as="span"
                      textStyle="eyebrow"
                      fontSize="2xs"
                      color="ink.subtle"
                      minW="6"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Text>
                    {t(`navigation.${item.key}`)}
                  </NavLink>
                ))}
              </Stack>
              <Box mt="auto">
                <Text textStyle="eyebrow" color="ink.subtle" mb="3">
                  {t("language.label")}
                </Text>
                <LanguageSwitcher />
                <Link
                  href={toWhatsappLink(parish.contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  mt="6"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  bg="ink.solid"
                  color="ink.contrast"
                  rounded="card"
                  px="5"
                  py="4"
                  fontWeight="700"
                  _hover={{ textDecoration: "none", bg: "ink.emphasized" }}
                >
                  {t("actions.whatsappSecretary")}
                  <LuArrowUpRight aria-hidden="true" />
                </Link>
              </Box>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
