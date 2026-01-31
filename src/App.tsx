import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { GameProvider, useGame } from "./store/GameContext";
import { ThemeProvider } from "./store/ThemeContext";
import { MainLayout } from "./layouts";
import { MainMenu } from "./pages/MainMenu";
import {
  Dashboard,
  Squad,
  Market,
  Finances,
  NextMatch,
} from "./pages";
import type { ActiveMenuId, CurrentScreen } from "./types";
import "./App.css";
import "./theme.css";

function AppContent() {
  const { state } = useGame();
  const { currentScreen, activeMenu } = state;

  if (currentScreen === "MAIN_MENU") {
    return <MainMenu />;
  }

  if (currentScreen === "DASHBOARD") {
    const renderPage = (): ReactNode => {
      const pageMap: Record<ActiveMenuId, ReactNode> = {
        dashboard: <Dashboard />,
        squad: <Squad />,
        market: <Market />,
        finances: <Finances />,
        "next-match": <NextMatch />,
      };
      return pageMap[activeMenu];
    };
    return <MainLayout>{renderPage()}</MainLayout>;
  }

  return (
    <PlaceholderScreen screen={currentScreen} />
  );
}

type PlaceholderScreenProps = Readonly<{
  screen: CurrentScreen;
}>;

function PlaceholderScreen({ screen }: PlaceholderScreenProps) {
  const { t } = useTranslation();
  const { setCurrentScreen } = useGame();
  const goToMainMenu = () => setCurrentScreen("MAIN_MENU");

  return (
    <div className="pfm-placeholder-screen">
      <p className="pfm-placeholder-screen__text">{screen} — {t("common.comingSoon")}</p>
      <button
        type="button"
        className="pfm-placeholder-screen__back"
        onClick={goToMainMenu}
      >
        {t("common.backToMenu")}
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <GameProvider>
        <AppContent />
      </GameProvider>
    </ThemeProvider>
  );
}

export default App;
