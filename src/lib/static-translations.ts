import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DEFAULT_LOCALE } from "@/lib/i18n";

export function withTranslations(namespaces: string[] = []): GetStaticProps {
  return async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale ?? DEFAULT_LOCALE, [
        "common",
        ...namespaces,
      ])),
    },
  });
}
