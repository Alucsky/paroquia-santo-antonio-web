import "@/styles/global.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import type { ReactElement, ReactNode } from "react";
import { Provider } from "@/components/ui/provider";
import { SiteLayout } from "@/layouts/site-layout";
import { fraunces, manrope } from "@/lib/fonts";

export type GetLayout = (page: ReactElement) => ReactNode;

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: GetLayout;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const defaultLayout: GetLayout = (page) => <SiteLayout>{page}</SiteLayout>;

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? defaultLayout;

  return (
    <Provider>
      <style>{`:root{--font-manrope:${manrope.style.fontFamily};--font-fraunces:${fraunces.style.fontFamily};}`}</style>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}

export default appWithTranslation(App);
