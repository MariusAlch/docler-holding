import constate from "constate";
import { useSettings } from "./useSettings";
import { useMessages } from "./useMessages";
import { useLanguage } from "./useLanguage";

const [StoreProvider, useStore] = constate(function () {
  const settings = useSettings();
  const messages = useMessages(settings);
  const language = useLanguage(settings);

  return {
    settings,
    messages,
    language,
  };
});

export { StoreProvider, useStore };
