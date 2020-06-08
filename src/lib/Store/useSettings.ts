import { Settings } from "src/model";
import useLocalStorage from "react-use/lib/useLocalStorage";

export function useSettings() {
  const defaultSettings: Settings = {
    interfaceColor: "light",
    username: `anonymous${Math.floor(Math.random() * 10000)}`,
    clockFormat: "12hours",
    sendOnEnter: "on",
    language: "EN",
  };

  const [settings, setSettings] = useLocalStorage<Settings>(
    "settings",
    defaultSettings
  );

  function resetSettings() {
    const newSettings: Settings = {
      ...defaultSettings,
      username: settings!.username,
    };
    setSettings(newSettings);
  }

  return { settings: settings!, setSettings, resetSettings };
}
