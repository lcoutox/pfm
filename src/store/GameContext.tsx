import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ActiveMenuId } from "../types";

type GameState = {
  currentDate: string;
  balance: number;
  activeMenu: ActiveMenuId;
};

type GameContextValue = {
  state: GameState;
  setCurrentDate: (date: string) => void;
  setBalance: (amount: number) => void;
  setActiveMenu: (menuId: ActiveMenuId) => void;
};

const initialState: GameState = {
  currentDate: new Date().toISOString().slice(0, 10),
  balance: 0,
  activeMenu: "dashboard",
};

const GameContext = createContext<GameContextValue | null>(null);

type GameProviderProps = Readonly<{
  children: ReactNode;
}>;

export function GameProvider({ children }: GameProviderProps) {
  const [state, setState] = useState<GameState>(initialState);

  const setCurrentDate = useCallback((date: string) => {
    setState((prev) => ({ ...prev, currentDate: date }));
  }, []);

  const setBalance = useCallback((amount: number) => {
    setState((prev) => ({ ...prev, balance: amount }));
  }, []);

  const setActiveMenu = useCallback((menuId: ActiveMenuId) => {
    setState((prev) => ({ ...prev, activeMenu: menuId }));
  }, []);

  const value = useMemo<GameContextValue>(
    () => ({
      state,
      setCurrentDate,
      setBalance,
      setActiveMenu,
    }),
    [state, setCurrentDate, setBalance, setActiveMenu],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame(): GameContextValue {
  const context = useContext(GameContext);
  if (context === null) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
