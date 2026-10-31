import {
  Box,
  Container,
  LinkOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import { HolyCard } from "@/components/shared/holy-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { parish } from "@/content/parish";
import { routes, sacramentLink } from "@/content/routes";
import { toWhatsappLink } from "@/utils/contact-links";

type QuickAction = {
  key: string;
  href: string;
  image: string;
  external?: boolean;
};

const quickActions: QuickAction[] = [
  {
    key: "schedule",
    href: routes.schedule,
    image: "/images/church/interior-nave.jpg",
  },
  {
    key: "baptism",
    href: sacramentLink("baptism"),
    image: "/images/parish-life/baptism.jpg",
  },
  {
    key: "wedding",
    href: sacramentLink("marriage"),
    image: "/images/church/altar-celebration.jpg",
  },
  {
    key: "secretary",
    href: toWhatsappLink(parish.contact.whatsapp),
    image: "/images/parish-life/ministers.jpg",
    external: true,
  },
];

export function QuickActions() {
  const { t } = useTranslation("home");

  return (
    <Box
      as="section"
      py={{ base: "16", md: "24" }}
      bg="paper.subtle"
      data-testid="quick-actions"
    >
      <Container maxW="page" px={{ base: "5", md: "8" }}>
        <Reveal>
          <SectionHeading
            eyebrow={t("quickActions.eyebrow")}
            title={t("quickActions.title")}
            lead={t("quickActions.lead")}
            mb={{ base: "10", md: "14" }}
          />
        </Reveal>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          gap={{ base: "8", md: "10" }}
          px={{ base: "2", md: "0" }}
        >
          {quickActions.map(({ key, href, image, external }, index) => (
            <Reveal key={key} delay={index}>
              <HolyCard
                index={index}
                eyebrow={String(index + 1).padStart(2, "0")}
                media={
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="8rem"
                    style={{ objectFit: "cover" }}
                  />
                }
                title={
                  <LinkOverlay asChild _focusVisible={{ outline: "none" }}>
                    {external ? (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {t(`quickActions.items.${key}.title`)}
                      </a>
                    ) : (
                      <NextLink href={href}>
                        {t(`quickActions.items.${key}.title`)}
                      </NextLink>
                    )}
                  </LinkOverlay>
                }
                description={t(`quickActions.items.${key}.description`)}
                footer={
                  <Text
                    fontSize="xs"
                    fontWeight="800"
                    letterSpacing="0.16em"
                    textTransform="uppercase"
                    color="brand.fg"
                  >
                    {t(
                      external
                        ? "quickActions.openWhatsapp"
                        : "quickActions.open",
                    )}{" "}
                    →
                  </Text>
                }
                data-testid="quick-actions-card"
              />
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
