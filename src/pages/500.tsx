import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import { LuArrowLeft } from "react-icons/lu";
import { Seo } from "@/components/shared/seo";
import { withTranslations } from "@/lib/static-translations";

export default function ServerErrorPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <Seo
        title={t("serverError.title")}
        description={t("serverError.description")}
        noIndex
      />
      <Box as="section" py={{ base: "24", md: "36" }}>
        <Container maxW="2xl" px={{ base: "5", md: "8" }}>
          <Stack gap="6" align="flex-start">
            <Text textStyle="eyebrow" color="brand.fg">
              500
            </Text>
            <Heading
              as="h1"
              textStyle="display"
              fontWeight="500"
              fontSize={{ base: "4xl", md: "6xl" }}
            >
              {t("serverError.title")}
            </Heading>
            <Text color="ink.muted" fontSize="lg">
              {t("serverError.description")}
            </Text>
            <Button asChild variant="ink" size="lg">
              <NextLink href="/">
                <LuArrowLeft aria-hidden="true" />
                {t("notFound.action")}
              </NextLink>
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export const getStaticProps = withTranslations();
