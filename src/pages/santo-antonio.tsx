import { useTranslation } from "next-i18next";
import { Devotions } from "@/components/saint/devotions";
import { PaintingSymbols } from "@/components/saint/painting-symbols";
import { SaintHero } from "@/components/saint/saint-hero";
import { SaintInTown } from "@/components/saint/saint-in-town";
import { SaintPrayer } from "@/components/saint/saint-prayer";
import { SaintTimeline } from "@/components/saint/saint-timeline";
import { Marquee } from "@/components/shared/marquee";
import { Seo } from "@/components/shared/seo";
import { saintPortrait } from "@/content/gallery";
import { withTranslations } from "@/lib/static-translations";

export default function SaintAnthonyPage() {
  const { t } = useTranslation("saint");
  const marqueeItems = t("marquee", { returnObjects: true }) as string[];

  return (
    <>
      <Seo
        title={t("seo.title")}
        description={t("seo.description")}
        image={saintPortrait.src}
      />
      <SaintHero />
      <Marquee items={marqueeItems} />
      <SaintTimeline />
      <PaintingSymbols />
      <Devotions />
      <SaintInTown />
      <SaintPrayer />
    </>
  );
}

export const getStaticProps = withTranslations(["saint"]);
