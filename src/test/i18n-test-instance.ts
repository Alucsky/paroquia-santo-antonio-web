import fs from "node:fs";
import path from "node:path";
import i18next, { type i18n } from "i18next";
import { initReactI18next } from "react-i18next";

const localesDir = path.resolve(__dirname, "../../public/locales");

function loadResources(locale: string) {
  const dir = path.join(localesDir, locale);
  return Object.fromEntries(
    fs
      .readdirSync(dir)
      .filter((file) => file.endsWith(".json"))
      .map((file) => [
        file.replace(".json", ""),
        JSON.parse(fs.readFileSync(path.join(dir, file), "utf8")),
      ]),
  );
}

export function createTestI18n(locale = "pt"): i18n {
  const instance = i18next.createInstance();
  instance.use(initReactI18next).init({
    lng: locale,
    fallbackLng: "pt",
    resources: { [locale]: loadResources(locale) },
    defaultNS: "common",
    interpolation: { escapeValue: false },
    initImmediate: false,
  });
  return instance;
}
