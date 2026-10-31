import { Box, Button, Container, Grid, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { LuMessageCircle } from "react-icons/lu";
import { DocumentChecklist } from "@/components/sacraments/document-checklist";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { parish } from "@/content/parish";
import { toWhatsappLink } from "@/utils/contact-links";

type ScheduleRow = {
  label: string;
  value: string;
};

type Props = {
  id: string;
  sacrament: "baptism" | "marriage";
  tone?: "canvas" | "subtle";
};

export function SacramentSection({ id, sacrament, tone = "canvas" }: Props) {
  const { t } = useTranslation("sacraments");
  const schedule = t(`${sacrament}.schedule`, {
    returnObjects: true,
  }) as ScheduleRow[];
  const documents = t(`${sacrament}.documents`, {
    returnObjects: true,
  }) as string[];
  const notes = t(`${sacrament}.notes`, { returnObjects: true }) as string[];

  return (
    <Box
      as="section"
      id={id}
      py={{ base: "16", md: "24" }}
      bg={tone === "subtle" ? "paper.subtle" : "paper.canvas"}
      scrollMarginTop="20"
      data-testid={`sacrament-${sacrament}`}
    >
      <Container maxW="page" px={{ base: "5", md: "8" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: "10", lg: "16" }}
          alignItems="start"
        >
          <Reveal>
            <Stack gap="8">
              <SectionHeading
                eyebrow={t(`${sacrament}.eyebrow`)}
                title={t(`${sacrament}.title`)}
                lead={t(`${sacrament}.lead`)}
              />
              <Stack gap="0" borderTopWidth="1px" borderColor="line.strong">
                {schedule.map((row) => (
                  <Grid
                    key={row.label}
                    templateColumns={{ base: "1fr", sm: "10rem 1fr" }}
                    gap={{ base: "0.5", sm: "4" }}
                    py="4"
                    borderBottomWidth="1px"
                    borderColor="line.hairline"
                  >
                    <Text textStyle="eyebrow" color="ink.subtle" pt="1">
                      {row.label}
                    </Text>
                    <Text fontFamily="heading" fontSize="xl" fontWeight="600">
                      {row.value}
                    </Text>
                  </Grid>
                ))}
              </Stack>
              <Stack as="ul" gap="2" pl="5" color="ink.muted" fontSize="sm">
                {notes.map((note) => (
                  <Text as="li" key={note}>
                    {note}
                  </Text>
                ))}
              </Stack>
              <Box>
                <Button asChild variant="ink" size="lg">
                  <a
                    href={toWhatsappLink(
                      parish.contact.whatsapp,
                      t(`${sacrament}.whatsappMessage`),
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuMessageCircle aria-hidden="true" />
                    {t(`${sacrament}.action`)}
                  </a>
                </Button>
              </Box>
            </Stack>
          </Reveal>
          <Reveal delay={1}>
            <DocumentChecklist id={sacrament} items={documents} />
          </Reveal>
        </Grid>
      </Container>
    </Box>
  );
}
