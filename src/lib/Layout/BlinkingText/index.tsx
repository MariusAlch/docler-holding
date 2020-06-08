import React from "react";
import { useState, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}
export function BlinkingText({ children }: Props) {
  const [isBold, setBold] = useState(true);

  useEffect(() => {
    const handle = setInterval(() => {
      setBold((upcase) => !upcase);
    }, 500);
    return () => clearInterval(handle);
  }, []);

  return (
    <span style={{ fontWeight: isBold ? "bold" : "initial" }}>{children}</span>
  );
}
