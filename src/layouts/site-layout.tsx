import { Box, Link } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import type { ReactNode } from "react";
import { IntroCurtain } from "@/components/layout/intro-curtain";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type Props = {
  children: ReactNode;
};

export function SiteLayout({ children }: Props) {
  const { t } = useTranslation("common");

  return (
    <Box minH="100dvh" display="flex" flexDirection="column">
      <Link
        href="#main-content"
        position="absolute"
        left="3"
        top="-20"
        zIndex="skipNav"
        bg="ink.solid"
        color="ink.contrast"
        px="4"
        py="2"
        rounded="md"
        fontWeight="700"
        _focus={{ top: "3" }}
      >
        {t("skipToContent")}
      </Link>
      <IntroCurtain />
      <SiteHeader />
      <Box
        as="main"
        id="main-content"
        flex="1"
        tabIndex={-1}
        _focus={{ outline: "none" }}
      >
        {children}
      </Box>
      <SiteFooter />
      <MobileActionBar />
    </Box>
  );
}
