import { HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { SUPPORTED_LOCALES } from "@/lib/i18n";

type Props = {
  tone?: "dark" | "light";
};

export function LanguageSwitcher({ tone = "dark" }: Props) {
  const { t } = useTranslation("common");
  const { asPath, locale: currentLocale } = useRouter();

  return (
    <HStack
      as="nav"
      gap="1"
      aria-label={t("language.label")}
      data-testid="language-switcher"
    >
      {SUPPORTED_LOCALES.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            asChild
            px="2"
            py="1"
            minH="8"
            display="inline-flex"
            alignItems="center"
            rounded="full"
            textStyle="eyebrow"
            fontSize="2xs"
            color={tone === "dark" ? "ink.fg" : "white"}
            bg={
              isActive
                ? tone === "dark"
                  ? "paper.muted"
                  : "whiteAlpha.300"
                : "transparent"
            }
            aria-current={isActive ? "true" : undefined}
            _hover={{
              textDecoration: "none",
              bg: tone === "dark" ? "paper.subtle" : "whiteAlpha.200",
            }}
          >
            <NextLink
              href={asPath}
              locale={locale}
              scroll={false}
              lang={locale}
            >
              <span aria-hidden="true">{locale.toUpperCase()}</span>
              <span className="sr-only">{t(`language.names.${locale}`)}</span>
            </NextLink>
          </Link>
        );
      })}
    </HStack>
  );
}
