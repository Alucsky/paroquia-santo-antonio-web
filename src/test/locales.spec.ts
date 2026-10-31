import fs from "node:fs";
import path from "node:path";
import { SUPPORTED_LOCALES } from "@/lib/i18n";

const localesDir = path.resolve(__dirname, "../../public/locales");

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

function shape(value: Json, prefix = ""): string[] {
  if (Array.isArray(value)) {
    return [
      `${prefix}[${value.length}]`,
      ...value.flatMap((item, index) => shape(item, `${prefix}[${index}]`)),
    ];
  }
  if (value !== null && typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) =>
      shape(child, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [prefix];
}

const read = (locale: string, file: string) =>
  JSON.parse(
    fs.readFileSync(path.join(localesDir, locale, file), "utf8"),
  ) as Json;

describe("locales", () => {
  const namespaces = fs.readdirSync(path.join(localesDir, "pt"));

  it.each(SUPPORTED_LOCALES.filter((locale) => locale !== "pt"))(
    "should be able to find every Portuguese key in the %s translation",
    (locale) => {
      for (const namespace of namespaces) {
        expect(
          shape(read(locale, namespace)).sort(),
          `${locale}/${namespace}`,
        ).toEqual(shape(read("pt", namespace)).sort());
      }
    },
  );

  it("should not be able to leave an empty translation", () => {
    for (const locale of SUPPORTED_LOCALES) {
      for (const namespace of namespaces) {
        const raw = fs.readFileSync(
          path.join(localesDir, locale, namespace),
          "utf8",
        );
        expect(raw, `${locale}/${namespace}`).not.toMatch(/:\s*""/);
      }
    }
  });
});
