import { useTranslation } from "react-i18next";

export function Squad() {
  const { t } = useTranslation();
  return (
    <div className="pfm-page">
      <h1 className="pfm-page__title">{t("pages.squad.title")}</h1>
      <p className="pfm-page__placeholder">{t("pages.squad.placeholder")}</p>
    </div>
  );
}
