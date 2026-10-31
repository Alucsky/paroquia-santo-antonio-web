import {
  Box,
  Container,
  HStack,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import {
  LuBaby,
  LuCross,
  LuDroplets,
  LuFlame,
  LuHandHeart,
  LuHeartHandshake,
  LuMessageCircle,
} from "react-icons/lu";
import { SacramentSection } from "@/components/sacraments/sacrament-section";
import { InfoCard } from "@/components/shared/info-card";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Seo } from "@/components/shared/seo";
import { parish } from "@/content/parish";
import { withTranslations } from "@/lib/static-translations";
import { toWhatsappLink } from "@/utils/contact-links";

const otherSacraments = [
  { key: "eucharist", icon: LuCross, phone: parish.contact.catechesisWhatsapp },
  {
    key: "confirmation",
    icon: LuFlame,
    phone: parish.contact.catechesisWhatsapp,
  },
  { key: "confession", icon: LuHandHeart, phone: parish.contact.whatsapp },
  { key: "anointing", icon: LuDroplets, phone: parish.contact.whatsapp },
] as const;

export default function SacramentsPage() {
  const { t } = useTranslation("sacraments");

  return (
    <>
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        lead={t("hero.lead")}
      >
        <HStack gap="3" wrap="wrap">
          {[
            { href: "#batismo", label: t("baptism.title"), icon: LuBaby },
            {
              href: "#matrimonio",
              label: t("marriage.title"),
              icon: LuHeartHandshake,
            },
            { href: "#outros", label: t("others.eyebrow"), icon: LuCross },
          ].map(({ href, label, icon: AnchorIcon }) => (
            <Link
              key={href}
              href={href}
              display="inline-flex"
              alignItems="center"
              gap="2"
              px="4"
              py="2.5"
              rounded="full"
              borderWidth="1px"
              borderColor="line.strong"
              fontWeight="700"
              fontSize="sm"
              _hover={{
                bg: "ink.solid",
                color: "ink.contrast",
                textDecoration: "none",
              }}
            >
              <AnchorIcon aria-hidden="true" />
              {label}
            </Link>
          ))}
        </HStack>
      </PageHero>

      <SacramentSection id="batismo" sacrament="baptism" />
      <SacramentSection id="matrimonio" sacrament="marriage" tone="subtle" />

      <Box
        as="section"
        id="outros"
        py={{ base: "16", md: "24" }}
        scrollMarginTop="20"
      >
        <Container maxW="page" px={{ base: "5", md: "8" }}>
          <Reveal>
            <SectionHeading
              eyebrow={t("others.eyebrow")}
              title={t("others.title")}
              lead={t("others.lead")}
              mb={{ base: "8", md: "12" }}
            />
          </Reveal>
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            gap={{ base: "6", md: "8" }}
          >
            {otherSacraments.map(({ key, icon, phone }, index) => (
              <Reveal key={key} delay={index}>
                <InfoCard
                  index={index}
                  icon={icon}
                  title={t(`others.items.${key}.title`)}
                  data-testid="other-sacrament"
                >
                  <Text color="ink.muted" fontSize="sm" flex="1">
                    {t(`others.items.${key}.description`)}
                  </Text>
                  <Link
                    href={toWhatsappLink(phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="brand.fg"
                    fontWeight="700"
                    fontSize="sm"
                    display="inline-flex"
                    alignItems="center"
                    gap="2"
                  >
                    <LuMessageCircle aria-hidden="true" />
                    {t(`others.items.${key}.action`)}
                  </Link>
                </InfoCard>
              </Reveal>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

export const getStaticProps = withTranslations(["sacraments"]);
