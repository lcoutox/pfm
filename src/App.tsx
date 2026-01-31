import type { ReactNode } from "react";
import { GameProvider, useGame } from "./store/GameContext";
import { ThemeProvider } from "./store/ThemeContext";
import { MainLayout } from "./layouts";
import {
  Dashboard,
  Squad,
  Market,
  Finances,
  NextMatch,
} from "./pages";
import type { ActiveMenuId } from "./types";
import "./theme.css";

// Future Rust invoke / API calls: use services/tauri.ts or other modules in src/services

function AppContent() {
  const { state } = useGame();
  const { activeMenu } = state;

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
