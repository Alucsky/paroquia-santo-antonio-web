import { Box, Container } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { CommunitiesFeature } from "@/components/home/communities-feature";
import { HomeHero } from "@/components/home/home-hero";
import { ParishLifeGallery } from "@/components/home/parish-life-gallery";
import { PatronFeature } from "@/components/home/patron-feature";
import { QuickActions } from "@/components/home/quick-actions";
import { WeeklySchedule } from "@/components/schedule/weekly-schedule";
import { Marquee } from "@/components/shared/marquee";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Seo } from "@/components/shared/seo";
import { VisitSection } from "@/components/shared/visit-section";
import { parish } from "@/content/parish";
import { SITE_URL } from "@/lib/site";
import { withTranslations } from "@/lib/static-translations";

export default function HomePage() {
  const { t } = useTranslation("home");
  const marqueeItems = t("marquee", { returnObjects: true }) as string[];

  return (
    <>
      <Seo
        description={t("seo.description")}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Church",
          name: parish.name,
          url: SITE_URL,
          telephone: parish.contact.phone,
          email: parish.contact.email,
          image: `${SITE_URL}/images/igreja/fachada-banner-1.jpg`,
          address: {
            "@type": "PostalAddress",
            streetAddress: parish.address.street,
            addressLocality: parish.address.city,
            addressRegion: parish.state,
            postalCode: parish.address.zipCode,
            addressCountry: "BR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: parish.coordinates.latitude,
            longitude: parish.coordinates.longitude,
          },
          sameAs: [parish.social.instagram, parish.social.youtube],
        }}
      />
      <HomeHero />
      <Marquee items={marqueeItems} />
      <QuickActions />
      <PatronFeature />
      <Box as="section" py={{ base: "16", md: "24" }} data-testid="home-weekly">
        <Container maxW="page" px={{ base: "5", md: "8" }}>
          <Reveal>
            <SectionHeading
              eyebrow={t("weekly.eyebrow")}
              title={t("weekly.title")}
              lead={t("weekly.lead")}
              mb={{ base: "10", md: "12" }}
            />
          </Reveal>
          <Reveal delay={1}>
            <WeeklySchedule />
          </Reveal>
        </Container>
      </Box>
      <CommunitiesFeature />
      <ParishLifeGallery />
      <VisitSection />
    </>
  );
}

export const getStaticProps = withTranslations(["home"]);
