import { ThemeProvider } from "styled-components";
import React from "react";
import { useStore } from "src/lib/Store";

type Theme = { [key in keyof typeof lightTheme]: string };
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

const lightTheme = {
  darkGray: "#333",
  gray: "#DDD",
  blue: "#0084ff",
  lightGray: "#f1f0f0",
  font: "#333",
  white: "#FFF",
  background: "#FFF",
};

const darkTheme: Theme = {
  darkGray: "#333",
  gray: "#DDD",
  blue: "#0084ff",
  lightGray: "#f1f0f0",
  font: "#EEE",
  white: "#FFF",
  background: "#161616",
};

interface Props {
  children?: React.ReactNode;
}
export function Theme({ children }: Props) {
  const { settings } = useStore();

  return (
    <ThemeProvider
      theme={
        settings.settings.interfaceColor === "dark" ? darkTheme : lightTheme
      }
    >
      {children}
    </ThemeProvider>
  );
}
