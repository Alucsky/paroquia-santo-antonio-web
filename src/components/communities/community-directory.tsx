import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useMemo, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { CommunityCard } from "@/components/communities/community-card";
import { type CommunityKind, communities } from "@/content/communities";
import { normalizeText } from "@/utils/normalize-text";

type Filter = "all" | CommunityKind;

const filters: Filter[] = ["all", "community", "neighborhood"];

export function CommunityDirectory() {
  const { t } = useTranslation("communities");
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const term = normalizeText(query);
    return communities.filter((community) => {
      if (filter !== "all" && community.kind !== filter) return false;
      if (!term) return true;
      const haystack = normalizeText(
        `${community.name} ${t(`items.${community.slug}.patron`)}`,
      );
      return haystack.includes(term);
    });
  }, [filter, query, t]);

  return (
    <Box data-testid="community-directory">
      <Flex
        direction={{ base: "column", md: "row" }}
        gap="3"
        justify="space-between"
        align={{ base: "stretch", md: "center" }}
        mb="8"
      >
        <HStack
          gap="2"
          role="group"
          aria-label={t("filters.label")}
          overflowX="auto"
          pb="1"
        >
          {filters.map((item) => (
            <Button
              key={item}
              size="sm"
              variant={filter === item ? "ink" : "outline"}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              flexShrink="0"
            >
              {t(`filters.${item}`)}
            </Button>
          ))}
        </HStack>
        <InputGroup
          startElement={<LuSearch aria-hidden="true" />}
          maxW={{ md: "xs" }}
          w="full"
        >
          <Input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("search.placeholder")}
            aria-label={t("search.label")}
            bg="paper.card"
            rounded="full"
            size="lg"
            fontSize="md"
          />
        </InputGroup>
      </Flex>
      <Text
        fontSize="sm"
        color="ink.subtle"
        mb="4"
        aria-live="polite"
        data-testid="community-directory-count"
      >
        {t("results", { count: visible.length })}
      </Text>
      {visible.length > 0 ? (
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          gap={{ base: "8", md: "10" }}
          px={{ base: "2", md: "0" }}
          alignItems="start"
        >
          {visible.map((community, index) => (
            <CommunityCard
              key={community.slug}
              community={community}
              index={index}
            />
          ))}
        </SimpleGrid>
      ) : (
        <Box
          textAlign="center"
          py="16"
          borderWidth="1px"
          borderStyle="dashed"
          borderColor="line.hairline"
          rounded="card"
          data-testid="community-directory-empty"
        >
          <Text color="ink.muted">{t("empty")}</Text>
        </Box>
      )}
    </Box>
  );
}
