import { useTranslation } from "react-i18next";

export function Finances() {
  const { t } = useTranslation();
  return (
    <div className="pfm-page">
      <h1 className="pfm-page__title">{t("pages.finances.title")}</h1>
      <p className="pfm-page__placeholder">{t("pages.finances.placeholder")}</p>
    </div>
  );
}
