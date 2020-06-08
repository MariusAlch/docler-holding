import { useSettings } from "./useSettings";

const EN = {
  send: "Send",
  chat: "Chat",
  settings: "Settings",
  submit: "Submit",
  resetDefaults: "Reset to defaults",
  username: "Username",
  interfaceColor: "Interface color",
  light: "Light",
  dark: "Dark",
  clockDisplay: "Clock display",
  hours12: "12 hours",
  hours24: "24 hours",
  sendOnEnter: "Send messages on CTRL+ENTER",
  on: "On",
  off: "Off",
  language: "Language",
  usernameTooShort: "Username cannot be less than 5 letters",
  settingsUpdated: "Settings updated!",
};

const LT: { [key in TextId]: string } = {
  send: "Siųsti",
  chat: "Pokalbis",
  settings: "Nustatymai",
  submit: "Nustatyti",
  resetDefaults: "Sugrąžinti pradinius nustatymus",
  username: "Vartotojo vardas",
  interfaceColor: "Sąsajos spalva",
  light: "Šviesi",
  dark: "Tamsi",
  clockDisplay: "Laiko formatas",
  hours12: "12-os valandų",
  hours24: "24-ių valandų",
  sendOnEnter: "Siųsti žinutes paspaudus CTRL+ENTER",
  on: "Įjungta",
  off: "Išjungta",
  language: "Kalba",
  usernameTooShort: "Vartotojo vardas negali būti trumpesnis nei 5 simboliai",
  settingsUpdated: "Nustatymai atnaujinti!",
};

export type TextId = keyof typeof EN;

export function useLanguage(settings: ReturnType<typeof useSettings>) {
  function getText(id: TextId) {
    switch (settings.settings.language) {
      case "LT":
        return LT[id];
      case "EN":
        return EN[id];
      default:
        return EN[id];
    }
  }
  return { getText };
}
