import { useTranslation } from "react-i18next";

export function Dashboard() {
  const { t } = useTranslation();
  return (
    <div className="pfm-page">
      <h1 className="pfm-page__title">{t("pages.dashboard.title")}</h1>
      <p className="pfm-page__placeholder">{t("pages.dashboard.placeholder")}</p>
    </div>
  );
}
