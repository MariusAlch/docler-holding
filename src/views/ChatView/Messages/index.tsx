import React from "react";
import styled from "styled-components";
import { Message } from "./Message";
import { useStore } from "src/lib/Store";

const Root = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export function Messages() {
  const { messages } = useStore();
  return (
    <Root>
      {messages.messagesList.map((message, i) => (
        <Message key={i} message={message} />
      ))}
    </Root>
  );
}
