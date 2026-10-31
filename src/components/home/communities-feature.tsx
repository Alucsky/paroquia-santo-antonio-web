import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Link,
  Stack,
  Text,
  Wrap,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import { LuArrowRight } from "react-icons/lu";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { communities } from "@/content/communities";
import { ministries } from "@/content/ministries";
import { routes } from "@/content/routes";

export function CommunitiesFeature() {
  const { t } = useTranslation("home");

  const stats = [
    {
      key: "communities",
      value: communities.filter((item) => item.kind === "community").length,
      href: routes.communities,
    },
    {
      key: "neighborhoods",
      value: communities.filter((item) => item.kind === "neighborhood").length,
      href: routes.communities,
    },
    { key: "ministries", value: ministries.length, href: routes.ministries },
  ];

  return (
    <Box
      as="section"
      py={{ base: "16", md: "28" }}
      data-testid="communities-feature"
    >
      <Container maxW="page" px={{ base: "5", md: "8" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: "10", lg: "20" }}
          alignItems="start"
        >
          <Reveal>
            <SectionHeading
              eyebrow={t("community.eyebrow")}
              title={t("community.title")}
              lead={t("community.lead")}
            />
            <Flex gap="3" mt="8" wrap="wrap">
              <Button asChild variant="ink">
                <NextLink href={routes.communities}>
                  {t("community.communitiesAction")}
                  <LuArrowRight aria-hidden="true" />
                </NextLink>
              </Button>
              <Button asChild variant="outline">
                <NextLink href={routes.ministries}>
                  {t("community.ministriesAction")}
                </NextLink>
              </Button>
            </Flex>
          </Reveal>
          <Stack gap="0">
            {stats.map((stat, index) => (
              <Reveal key={stat.key} delay={index}>
                <Link
                  asChild
                  display="flex"
                  alignItems="baseline"
                  gap={{ base: "5", md: "8" }}
                  py={{ base: "5", md: "7" }}
                  borderTopWidth="1px"
                  borderBottomWidth={index === stats.length - 1 ? "1px" : "0"}
                  borderColor="line.strong"
                  role="group"
                  data-testid="communities-feature-stat"
                  _hover={{ textDecoration: "none" }}
                >
                  <NextLink href={stat.href}>
                    <Text
                      fontFamily="heading"
                      fontSize={{ base: "6xl", md: "8xl" }}
                      fontWeight="500"
                      lineHeight="0.9"
                      letterSpacing="-0.05em"
                      color="brand.solid"
                      minW={{ base: "20", md: "32" }}
                    >
                      {stat.value}
                    </Text>
                    <Box flex="1">
                      <Text
                        fontFamily="heading"
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="600"
                        letterSpacing="-0.02em"
                        _groupHover={{ color: "brand.fg" }}
                      >
                        {t(`community.stats.${stat.key}.title`)}
                      </Text>
                      <Text fontSize="sm" color="ink.muted">
                        {t(`community.stats.${stat.key}.description`)}
                      </Text>
                    </Box>
                  </NextLink>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={3}>
              <Wrap gap="2" mt="6">
                {communities.slice(0, 9).map((community) => (
                  <Box
                    key={community.slug}
                    px="3"
                    py="1.5"
                    rounded="full"
                    bg="paper.subtle"
                    fontSize="xs"
                    fontWeight="600"
                    color="ink.muted"
                  >
                    {community.name}
                  </Box>
                ))}
                <Box
                  px="3"
                  py="1.5"
                  rounded="full"
                  bg="brand.subtle"
                  fontSize="xs"
                  fontWeight="700"
                  color="brand.fg"
                >
                  {t("community.more", { count: communities.length - 9 })}
                </Box>
              </Wrap>
            </Reveal>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
}
