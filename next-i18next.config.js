module.exports = {
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "es"],
  },
  localePath:
    typeof window === "undefined"
      ? require("node:path").resolve("./public/locales")
      : "/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
