import { ThemeProvider } from "styled-components";
import React from "react";

type Theme = { [key in keyof typeof lightTheme]: string };
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

const lightTheme = {
  plainGray: "#ddd",
  easyBlue: "#0084ff",
  sadGray: "#f1f0f0",
  textBlack: "#333",
  racingWhite: "#FFF",
};

const darkTheme: Theme = {
  plainGray: "#ddd",
  easyBlue: "#0084ff",
  sadGray: "#f1f0f0",
  textBlack: "#333",
  racingWhite: "#FFF",
};

interface Props {
  children?: React.ReactNode;
}
export function Theme({ children }: Props) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
