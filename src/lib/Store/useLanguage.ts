import { useSettings } from "./useSettings";

const EN = {
  send: "Send",
};

export type TextId = keyof typeof EN;

export function useLanguage(settings: ReturnType<typeof useSettings>) {
  function getText(id: TextId) {
    return EN[id];
  }
  return { getText };
}
