import { Box, Container } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { CommunityDirectory } from "@/components/communities/community-directory";
import { PageHero } from "@/components/shared/page-hero";
import { Seo } from "@/components/shared/seo";
import { VisitSection } from "@/components/shared/visit-section";
import { communities } from "@/content/communities";
import { withTranslations } from "@/lib/static-translations";

export default function CommunitiesPage() {
  const { t } = useTranslation("communities");

  return (
    <>
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title", { count: communities.length })}
        lead={t("hero.lead")}
      />
      <Box as="section" py={{ base: "10", md: "16" }}>
        <Container maxW="page" px={{ base: "5", md: "8" }}>
          <CommunityDirectory />
        </Container>
      </Box>
      <VisitSection />
    </>
  );
}

export const getStaticProps = withTranslations(["communities"]);
