import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ThemeMode = "dark" | "light";

type ThemeState = {
  mode: ThemeMode;
};

type ThemeContextValue = {
  state: ThemeState;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const initialState: ThemeState = {
  mode: "dark",
};

function getInitialTheme(): ThemeState {
  if (typeof document === "undefined") return initialState;
  const stored = document.documentElement.getAttribute("data-theme") as
    | ThemeMode
    | null;
  if (stored === "dark" || stored === "light") return { mode: stored };
  document.documentElement.setAttribute("data-theme", initialState.mode);
  return initialState;
}

type ThemeProviderProps = Readonly<{
  children: ReactNode;
}>;

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, setState] = useState<ThemeState>(getInitialTheme);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setState({ mode });
    document.documentElement.setAttribute("data-theme", mode);
  }, []);

  const toggleTheme = useCallback(() => {
    setState((prev) => {
      const next = prev.mode === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      return { mode: next };
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({
      state,
      setThemeMode,
      toggleTheme,
    }),
    [state, setThemeMode, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
