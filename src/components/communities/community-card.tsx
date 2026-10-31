import { Box, Collapsible, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { LuChevronDown } from "react-icons/lu";
import type { Community } from "@/content/communities";

type Props = {
  community: Community;
};

export function CommunityCard({ community }: Props) {
  const { t } = useTranslation("communities");
  const patron = t(`items.${community.slug}.patron`);
  const charism = t(`items.${community.slug}.charism`);

  return (
    <Collapsible.Root asChild>
      <Box
        as="article"
        bg="paper.card"
        borderWidth="1px"
        borderColor="line.hairline"
        rounded="card"
        overflow="hidden"
        transition="border-color 0.2s, box-shadow 0.2s"
        _hover={{ borderColor: "brand.muted" }}
        data-testid="community-card"
      >
        <Stack gap="4" p={{ base: "5", md: "6" }}>
          <Flex justify="space-between" align="flex-start" gap="4">
            <Box
              boxSize="14"
              rounded="full"
              bg={
                community.kind === "community"
                  ? "brand.subtle"
                  : "accent.subtle"
              }
              color={community.kind === "community" ? "brand.fg" : "accent.fg"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontFamily="heading"
              fontSize="2xl"
              fontWeight="600"
              flexShrink="0"
              aria-hidden="true"
            >
              {community.name.charAt(0)}
            </Box>
            <Text
              textStyle="eyebrow"
              fontSize="2xs"
              px="2.5"
              py="1"
              rounded="full"
              bg="paper.subtle"
              color="ink.muted"
              data-testid="community-card-kind"
            >
              {t(`kinds.${community.kind}`)}
            </Text>
          </Flex>
          <Stack gap="1">
            <Heading
              as="h3"
              fontFamily="heading"
              fontWeight="600"
              fontSize="xl"
              letterSpacing="-0.02em"
              data-testid="community-card-name"
            >
              {community.name}
            </Heading>
            <Text fontSize="sm" color="ink.muted">
              {t("patronLabel")}:{" "}
              <Text as="span" fontWeight="700" color="ink.fg">
                {patron}
              </Text>
            </Text>
            {community.arrival ? (
              <Text
                fontSize="sm"
                color="ink.subtle"
                data-testid="community-card-arrival"
              >
                {t(`arrival.${community.arrival.precision}`, {
                  year: community.arrival.year,
                })}
              </Text>
            ) : null}
          </Stack>
        </Stack>
        <Collapsible.Content>
          <Stack
            gap="4"
            px={{ base: "5", md: "6" }}
            pb="5"
            fontSize="sm"
            color="ink.muted"
          >
            <Text>{charism}</Text>
            {community.families ? (
              <Box>
                <Text
                  textStyle="eyebrow"
                  fontSize="2xs"
                  color="ink.subtle"
                  mb="1"
                >
                  {t("familiesLabel")}
                </Text>
                <Text>{community.families}</Text>
              </Box>
            ) : null}
          </Stack>
        </Collapsible.Content>
        <Collapsible.Trigger
          w="full"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={{ base: "5", md: "6" }}
          py="3.5"
          borderTopWidth="1px"
          borderColor="line.hairline"
          fontSize="sm"
          fontWeight="700"
          color="brand.fg"
          cursor="pointer"
          _hover={{ bg: "paper.canvas" }}
          data-testid="community-card-toggle"
        >
          <Collapsible.Context>
            {(api) => (api.open ? t("hideStory") : t("showStory"))}
          </Collapsible.Context>
          <Collapsible.Indicator
            transition="transform 0.2s"
            _open={{ transform: "rotate(180deg)" }}
          >
            <LuChevronDown aria-hidden="true" />
          </Collapsible.Indicator>
        </Collapsible.Trigger>
      </Box>
    </Collapsible.Root>
  );
}
