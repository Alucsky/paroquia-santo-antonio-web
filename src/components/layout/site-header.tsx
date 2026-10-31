import { Box, Button, Container, Flex, HStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { BrandLink } from "@/components/layout/brand-link";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { NavLink } from "@/components/layout/nav-link";
import { contactNavigation, primaryNavigation } from "@/content/navigation";

export function SiteHeader() {
  const { t } = useTranslation("common");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="rgba(250, 247, 242, 0.86)"
      backdropFilter="saturate(160%) blur(14px)"
      borderBottomWidth="1px"
      borderColor={scrolled ? "line.hairline" : "transparent"}
      transition="border-color 0.2s"
      data-testid="site-header"
    >
      <Container maxW="page" px={{ base: "4", md: "8" }}>
        <Flex
          h={{ base: "16", md: "20" }}
          align="center"
          justify="space-between"
          gap="6"
        >
          <BrandLink />
          <HStack as="nav" aria-label={t("menu.label")} gap="1" hideBelow="lg">
            {primaryNavigation.map((item) => (
              <NavLink
                key={item.key}
                href={item.href}
                px="3"
                py="2"
                rounded="full"
                fontSize="sm"
                fontWeight="600"
                color="ink.muted"
                _hover={{
                  color: "ink.fg",
                  bg: "paper.subtle",
                  textDecoration: "none",
                }}
                _currentPage={{ color: "brand.fg", bg: "brand.subtle" }}
              >
                {t(`navigation.${item.key}`)}
              </NavLink>
            ))}
          </HStack>
          <HStack gap="3">
            <Box hideBelow="lg">
              <LanguageSwitcher />
            </Box>
            <Button asChild variant="ink" size="sm" hideBelow="md">
              <NextLink href={contactNavigation.href}>
                {t(`navigation.${contactNavigation.key}`)}
              </NextLink>
            </Button>
            <MobileMenu />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
