import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useGame } from "../../store/GameContext";
import type { ActiveMenuId } from "../../types";
import "./MainLayout.css";

type SidebarItem = Readonly<{
  id: ActiveMenuId;
  labelKey: string;
}>;

const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: "dashboard", labelKey: "sidebar.dashboard" },
  { id: "squad", labelKey: "sidebar.squad" },
  { id: "market", labelKey: "sidebar.market" },
  { id: "finances", labelKey: "sidebar.finances" },
  { id: "next-match", labelKey: "sidebar.nextMatch" },
];

type MainLayoutProps = Readonly<{
  children: ReactNode;
}>;

export function MainLayout({ children }: MainLayoutProps) {
  const { t } = useTranslation();
  const { state, setActiveMenu } = useGame();
  const { activeMenu, currentDate, balance } = state;

  return (
    <div className="pfm-main-layout">
      <aside className="pfm-sidebar" aria-label={t("sidebar.brand")}>
        <div className="pfm-sidebar__brand">{t("sidebar.brand")}</div>
        <nav className="pfm-sidebar__nav">
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = activeMenu === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`pfm-sidebar__item ${isActive ? "pfm-sidebar__item--active" : ""}`}
                onClick={() => setActiveMenu(item.id)}
                aria-current={isActive ? "page" : undefined}
              >
                {t(item.labelKey)}
              </button>
            );
          })}
        </nav>
        <div className="pfm-sidebar__footer">
          <div className="pfm-sidebar__meta">
            <span className="pfm-sidebar__label">{t("sidebar.dateLabel")}</span>
            <span className="pfm-sidebar__value">{currentDate}</span>
          </div>
          <div className="pfm-sidebar__meta">
            <span className="pfm-sidebar__label">{t("sidebar.balanceLabel")}</span>
            <span className="pfm-sidebar__value">€ {balance.toLocaleString()}</span>
          </div>
          <div className="pfm-sidebar__meta pfm-sidebar__version">
            <span className="pfm-sidebar__label">{t("footer.versionLabel")}</span>
            <span className="pfm-sidebar__value">{__APP_VERSION__}</span>
          </div>
        </div>
      </aside>
      <main className="pfm-content" role="main">
        {children}
      </main>
    </div>
  );
}
