import { useTranslation } from "next-i18next";

export function IntroCurtain() {
  const { t } = useTranslation("common");

  return (
    <div
      className="intro-curtain"
      aria-hidden="true"
      data-testid="intro-curtain"
    >
      <svg
        viewBox="0 0 48 48"
        width="72"
        height="72"
        fill="none"
        className="intro-curtain__mark"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="intro-curtain__arch"
          d="M6 44V26C6 14.5 14 5.5 24 3c10 2.5 18 11.5 18 23v18"
          pathLength={1}
        />
        <path className="intro-curtain__ground" d="M2 44h44" pathLength={1} />
        <path
          className="intro-curtain__cross"
          d="M24 15v21M17 22h14"
          pathLength={1}
        />
      </svg>
      <span className="intro-curtain__name">{t("brand.name")}</span>
      <span className="intro-curtain__place">{t("brand.place")}</span>
    </div>
  );
}
