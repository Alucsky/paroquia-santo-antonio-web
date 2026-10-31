import {
  Box,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import type { IconType } from "react-icons";
import {
  LuArrowUpRight,
  LuBaby,
  LuCalendarClock,
  LuHeartHandshake,
  LuMessageCircle,
} from "react-icons/lu";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { parish } from "@/content/parish";
import { toWhatsappLink } from "@/utils/contact-links";

type QuickAction = {
  key: string;
  href: string;
  icon: IconType;
  external?: boolean;
};

const quickActions: QuickAction[] = [
  { key: "schedule", href: "/horarios", icon: LuCalendarClock },
  { key: "baptism", href: "/sacramentos#batismo", icon: LuBaby },
  { key: "wedding", href: "/sacramentos#matrimonio", icon: LuHeartHandshake },
  {
    key: "secretary",
    href: toWhatsappLink(parish.contact.whatsapp),
    icon: LuMessageCircle,
    external: true,
  },
];

export function QuickActions() {
  const { t } = useTranslation("home");

  return (
    <Box as="section" py={{ base: "16", md: "24" }} data-testid="quick-actions">
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
          gap={{ base: "3", md: "5" }}
        >
          {quickActions.map(
            ({ key, href, icon: ActionIcon, external }, index) => (
              <Reveal key={key} delay={index}>
                <LinkBox
                  as="article"
                  h="full"
                  bg="paper.card"
                  borderWidth="1px"
                  borderColor="line.hairline"
                  rounded="card"
                  p={{ base: "5", md: "7" }}
                  transition="transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 40px -24px rgba(26,21,17,0.35)",
                    borderColor: "brand.muted",
                  }}
                  data-testid="quick-actions-card"
                >
                  <Stack
                    gap={{ base: "4", md: "8" }}
                    h="full"
                    direction={{ base: "row", sm: "column" }}
                    align={{ base: "center", sm: "stretch" }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      boxSize="12"
                      rounded="full"
                      bg="brand.subtle"
                      color="brand.fg"
                      flexShrink="0"
                    >
                      <ActionIcon size="22" aria-hidden="true" />
                    </Box>
                    <Stack gap="1.5" flex="1">
                      <Heading
                        as="h3"
                        fontFamily="heading"
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="600"
                        letterSpacing="-0.02em"
                      >
                        <LinkOverlay asChild>
                          {external ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {t(`quickActions.items.${key}.title`)}
                            </a>
                          ) : (
                            <NextLink href={href}>
                              {t(`quickActions.items.${key}.title`)}
                            </NextLink>
                          )}
                        </LinkOverlay>
                      </Heading>
                      <Text fontSize="sm" color="ink.muted" hideBelow="sm">
                        {t(`quickActions.items.${key}.description`)}
                      </Text>
                    </Stack>
                    <Box
                      color="ink.subtle"
                      alignSelf={{ base: "center", sm: "flex-end" }}
                    >
                      <LuArrowUpRight aria-hidden="true" size="20" />
                    </Box>
                  </Stack>
                </LinkBox>
              </Reveal>
            ),
          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
