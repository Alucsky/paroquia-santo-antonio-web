import { Box, Collapsible, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { LuChevronDown } from "react-icons/lu";
import { HolyCard } from "@/components/shared/holy-card";
import { HolyCardMedallion } from "@/components/shared/holy-card-medallion";
import type { Community } from "@/content/communities";

type Props = {
  community: Community;
  index?: number;
};

export function CommunityCard({ community, index = 0 }: Props) {
  const { t } = useTranslation("communities");
  const patron = t(`items.${community.slug}.patron`);
  const charism = t(`items.${community.slug}.charism`);

  return (
    <Collapsible.Root asChild>
      <Box as="article" h="full" data-testid="community-card">
        <HolyCard
          index={index}
          mediaSize="sm"
          media={
            <HolyCardMedallion
              tone={community.kind === "community" ? "brand" : "ink"}
            >
              <Text
                fontFamily="heading"
                fontStyle="italic"
                fontSize="3xl"
                lineHeight="1"
              >
                {community.name.charAt(0)}
              </Text>
            </HolyCardMedallion>
          }
          eyebrow={t(`kinds.${community.kind}`)}
          title={
            <span data-testid="community-card-name">{community.name}</span>
          }
          footer={
            <Collapsible.Trigger
              w="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="1.5"
              pt="3"
              borderTopWidth="1px"
              borderStyle="dashed"
              borderColor="frame.gold"
              fontSize="xs"
              fontWeight="800"
              letterSpacing="0.14em"
              textTransform="uppercase"
              color="brand.fg"
              cursor="pointer"
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
          }
        >
          <Text as="span" srOnly data-testid="community-card-kind">
            {t(`kinds.${community.kind}`)}
          </Text>
          <Text fontSize="sm" color="ink.muted">
            {t("patronLabel")}:{" "}
            <Text as="span" fontWeight="700" color="ink.fg">
              {patron}
            </Text>
          </Text>
          {community.arrival ? (
            <Text
              fontSize="xs"
              color="ink.subtle"
              data-testid="community-card-arrival"
            >
              {t(`arrival.${community.arrival.precision}`, {
                year: community.arrival.year,
              })}
            </Text>
          ) : null}
          <Collapsible.Content w="full">
            <Stack
              gap="3"
              pt="2"
              fontSize="sm"
              color="ink.muted"
              textAlign="left"
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
        </HolyCard>
      </Box>
    </Collapsible.Root>
  );
}
