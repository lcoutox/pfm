import { useTranslation } from "react-i18next";

export function NextMatch() {
  const { t } = useTranslation();
  return (
    <div className="pfm-page">
      <h1 className="pfm-page__title">{t("pages.nextMatch.title")}</h1>
      <p className="pfm-page__placeholder">{t("pages.nextMatch.placeholder")}</p>
    </div>
  );
}
