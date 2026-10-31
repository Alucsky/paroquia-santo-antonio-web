import { Box, Container } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lead, children }: Props) {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      pt={{ base: "12", md: "20" }}
      pb={{ base: "12", md: "16" }}
      borderBottomWidth="1px"
      borderColor="line.hairline"
      data-testid="page-hero"
    >
      <Box
        aria-hidden="true"
        position="absolute"
        right={{ base: "-24", md: "-10" }}
        top={{ base: "-10", md: "-16" }}
        boxSize={{ base: "64", md: "96" }}
        rounded="full"
        bg="radial-gradient(circle, rgba(210,162,62,0.22), rgba(210,162,62,0) 70%)"
        pointerEvents="none"
      />
      <Container maxW="page" px={{ base: "5", md: "8" }} position="relative">
        <Reveal>
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>
        {children ? (
          <Reveal delay={2} mt={{ base: "8", md: "10" }}>
            {children}
          </Reveal>
        ) : null}
      </Container>
    </Box>
  );
}
