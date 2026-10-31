import { Box, Container, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import type { IconType } from "react-icons";
import {
  LuBookOpen,
  LuInstagram,
  LuMail,
  LuMessageCircle,
  LuPhone,
  LuYoutube,
} from "react-icons/lu";
import { OfficeHours } from "@/components/schedule/office-hours";
import { InfoCard } from "@/components/shared/info-card";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Seo } from "@/components/shared/seo";
import { VisitSection } from "@/components/shared/visit-section";
import { parish } from "@/content/parish";
import { withTranslations } from "@/lib/static-translations";
import {
  toEmailLink,
  toPhoneLink,
  toWhatsappLink,
} from "@/utils/contact-links";

type Channel = {
  key: string;
  icon: IconType;
  value: string;
  href: string;
  external?: boolean;
};

const channels: Channel[] = [
  {
    key: "whatsapp",
    icon: LuMessageCircle,
    value: parish.contact.whatsapp,
    href: toWhatsappLink(parish.contact.whatsapp),
    external: true,
  },
  {
    key: "phone",
    icon: LuPhone,
    value: parish.contact.phone,
    href: toPhoneLink(parish.contact.phone),
  },
  {
    key: "email",
    icon: LuMail,
    value: parish.contact.email,
    href: toEmailLink(parish.contact.email),
  },
  {
    key: "catechesis",
    icon: LuBookOpen,
    value: parish.contact.catechesisWhatsapp,
    href: toWhatsappLink(parish.contact.catechesisWhatsapp),
    external: true,
  },
  {
    key: "instagram",
    icon: LuInstagram,
    value: parish.social.instagramHandle,
    href: parish.social.instagram,
    external: true,
  },
  {
    key: "youtube",
    icon: LuYoutube,
    value: "YouTube",
    href: parish.social.youtube,
    external: true,
  },
];

export default function ContactPage() {
  const { t } = useTranslation("contact");

  return (
    <>
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        lead={t("hero.lead")}
      />
      <Box as="section" py={{ base: "12", md: "20" }}>
        <Container maxW="page" px={{ base: "5", md: "8" }}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            gap={{ base: "3", md: "5" }}
          >
            {channels.map((channel, index) => (
              <Reveal key={channel.key} delay={index % 3}>
                <InfoCard
                  icon={channel.icon}
                  eyebrow={t(`channels.${channel.key}.label`)}
                  title={channel.value}
                  data-testid="contact-channel"
                >
                  <Text color="ink.muted" fontSize="sm" flex="1">
                    {t(`channels.${channel.key}.description`)}
                  </Text>
                  <Link
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    color="brand.fg"
                    fontWeight="700"
                    fontSize="sm"
                  >
                    {t(`channels.${channel.key}.action`)} →
                  </Link>
                </InfoCard>
              </Reveal>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      <Box as="section" py={{ base: "12", md: "20" }} bg="paper.subtle">
        <Container maxW="page" px={{ base: "5", md: "8" }}>
          <Reveal>
            <SectionHeading
              eyebrow={t("office.eyebrow")}
              title={t("office.title")}
              mb={{ base: "8", md: "12" }}
            />
          </Reveal>
          <Reveal delay={1}>
            <OfficeHours />
          </Reveal>
        </Container>
      </Box>
      <VisitSection />
    </>
  );
}

export const getStaticProps = withTranslations(["contact"]);
