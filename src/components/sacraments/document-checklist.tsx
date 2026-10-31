import { Box, Checkbox, Flex, Progress, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useState } from "react";

type Props = {
  id: string;
  items: string[];
};

export function DocumentChecklist({ id, items }: Props) {
  const { t } = useTranslation("sacraments");
  const [checked, setChecked] = useState<Set<number>>(() => new Set());

  const toggle = (index: number) => {
    setChecked((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const done = checked.size;
  const total = items.length;

  return (
    <Box
      bg="paper.card"
      borderWidth="1px"
      borderColor="line.hairline"
      rounded="card"
      p={{ base: "5", md: "7" }}
      data-testid={`document-checklist-${id}`}
    >
      <Flex justify="space-between" align="baseline" gap="4" mb="3">
        <Text textStyle="eyebrow" color="brand.fg">
          {t("checklist.title")}
        </Text>
        <Text
          fontSize="sm"
          color="ink.subtle"
          fontVariantNumeric="tabular-nums"
          data-testid={`document-checklist-${id}-progress`}
        >
          {t("checklist.progress", { done, total })}
        </Text>
      </Flex>
      <Progress.Root
        value={total === 0 ? 0 : (done / total) * 100}
        size="xs"
        colorPalette="terracotta"
        mb="5"
        aria-label={t("checklist.progressLabel")}
      >
        <Progress.Track rounded="full" bg="paper.subtle">
          <Progress.Range rounded="full" bg="brand.solid" />
        </Progress.Track>
      </Progress.Root>
      <Stack as="ul" gap="0" listStyleType="none" m="0" p="0">
        {items.map((item, index) => (
          <Box
            as="li"
            key={item}
            borderTopWidth={index === 0 ? "0" : "1px"}
            borderColor="line.hairline"
          >
            <Checkbox.Root
              checked={checked.has(index)}
              onCheckedChange={() => toggle(index)}
              colorPalette="terracotta"
              py="3"
              w="full"
              alignItems="flex-start"
              gap="3"
              cursor="pointer"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control mt="0.5" rounded="md" />
              <Checkbox.Label
                fontWeight="500"
                textDecoration={checked.has(index) ? "line-through" : "none"}
                color={checked.has(index) ? "ink.subtle" : "ink.fg"}
              >
                {item}
              </Checkbox.Label>
            </Checkbox.Root>
          </Box>
        ))}
      </Stack>
      <Text fontSize="xs" color="ink.subtle" mt="4">
        {t("checklist.hint")}
      </Text>
    </Box>
  );
}
