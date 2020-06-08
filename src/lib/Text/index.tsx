import { TextId } from "src/lib/Store/useLanguage";
import { useStore } from "src/lib/Store";
import React from "react";

interface Props {
  textId: TextId;
}
export function Text({ textId }: Props) {
  const { language } = useStore();

  return <>{language.getText(textId)}</>;
}
