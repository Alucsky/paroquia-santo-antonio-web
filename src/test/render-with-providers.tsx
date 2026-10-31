import { ChakraProvider } from "@chakra-ui/react";
import { type RenderOptions, render } from "@testing-library/react";
import type { ReactElement } from "react";
import { I18nextProvider } from "react-i18next";
import system from "@/styles/system";
import { createTestI18n } from "@/test/i18n-test-instance";
import { routerState } from "@/test/router-state";

type Options = Omit<RenderOptions, "wrapper"> & {
  locale?: string;
  pathname?: string;
};

export function renderWithProviders(
  ui: ReactElement,
  { locale = "pt", pathname = "/", ...options }: Options = {},
) {
  routerState.locale = locale;
  routerState.pathname = pathname;
  routerState.asPath = pathname;
  const i18n = createTestI18n(locale);

  return {
    i18n,
    ...render(
      <ChakraProvider value={system}>
        <I18nextProvider i18n={i18n}>{ui}</I18nextProvider>
      </ChakraProvider>,
      options,
    ),
  };
}
