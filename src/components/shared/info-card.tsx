import type { BoxProps } from "@chakra-ui/react";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { HolyCard } from "@/components/shared/holy-card";
import { HolyCardMedallion } from "@/components/shared/holy-card-medallion";

type Props = Omit<BoxProps, "title"> & {
  icon?: IconType;
  index?: number;
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
};

export function InfoCard({
  icon: CardIcon,
  index = 0,
  eyebrow,
  title,
  children,
  ...rest
}: Props) {
  return (
    <HolyCard
      index={index}
      mediaSize="sm"
      media={
        CardIcon ? (
          <HolyCardMedallion tone={index % 2 === 0 ? "brand" : "ink"}>
            <CardIcon size="24" aria-hidden="true" />
          </HolyCardMedallion>
        ) : undefined
      }
      eyebrow={eyebrow}
      title={title}
      {...rest}
    >
      {children}
    </HolyCard>
  );
}
