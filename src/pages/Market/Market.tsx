import { useTranslation } from "react-i18next";

export function Market() {
  const { t } = useTranslation();
  return (
    <div className="pfm-page">
      <h1 className="pfm-page__title">{t("pages.market.title")}</h1>
      <p className="pfm-page__placeholder">{t("pages.market.placeholder")}</p>
    </div>
  );
}
