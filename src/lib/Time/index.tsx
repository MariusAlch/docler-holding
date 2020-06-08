import { useStore } from "src/lib/Store";
import React from "react";
import moment from "moment";

interface Props {
  timestamp: number;
}
export function Time({ timestamp }: Props) {
  const { settings } = useStore();

  const formattedTime =
    settings.settings.clockFormat === "12hours"
      ? moment(timestamp).format("LT")
      : moment(timestamp).format("HH:mm");

  return <>{formattedTime}</>;
}
