import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { Message } from "./Message";
import { useStore } from "src/lib/Store";

const Root = styled.div`
  overflow: auto;
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
`;

export function Messages() {
  const { messages } = useStore();

  const roofRef = useRef<HTMLDivElement | null>(null);

  /**
   * Scroll down to newest messages
   */
  useLayoutEffect(() => {
    if (roofRef.current === null) return;
    roofRef.current.scrollTop = roofRef.current.scrollHeight;
  }, [roofRef, messages.messagesList.length]);

  return (
    <Root ref={roofRef}>
      {/* reversed due to column-reverse css */}
      {[...messages.messagesList].reverse().map((message, i) => (
        <Message key={i} message={message} />
      ))}
    </Root>
  );
}
