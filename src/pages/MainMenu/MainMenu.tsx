import { useTranslation } from "react-i18next";
import { useGame } from "../../store/GameContext";
import { exitApp } from "../../services/tauri";
import "./MainMenu.css";

export function MainMenu() {
  const { t } = useTranslation();
  const { setCurrentScreen } = useGame();

  const goToNewGame = () => {
    setCurrentScreen("DASHBOARD");
  };

  const goToLoadGame = () => {
    setCurrentScreen("LOAD_GAME");
  };

  const goToEditor = () => {
    setCurrentScreen("EDITOR");
  };

  const handleExit = () => {
    exitApp();
  };

  return (
    <main className="pfm-main-menu">
      <div className="pfm-main-menu__content">
        <h1 className="pfm-main-menu__title">{t("sidebar.brand")}</h1>
        <nav className="pfm-main-menu__nav" aria-label="Menu principal">
          <button
            type="button"
            className="pfm-main-menu__button"
            onClick={goToNewGame}
          >
            {t("menu.newGame")}
          </button>
          <button
            type="button"
            className="pfm-main-menu__button"
            onClick={goToLoadGame}
          >
            {t("menu.loadGame")}
          </button>
          <button
            type="button"
            className="pfm-main-menu__button"
            onClick={goToEditor}
          >
            {t("menu.editor")}
          </button>
          <button
            type="button"
            className="pfm-main-menu__button pfm-main-menu__button--exit"
            onClick={handleExit}
          >
            {t("menu.exit")}
          </button>
        </nav>
      </div>
      <div className="pfm-main-menu__version" aria-hidden="true">
        {__APP_VERSION__}
      </div>
    </main>
  );
}
