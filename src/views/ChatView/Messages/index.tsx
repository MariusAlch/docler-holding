import React from "react";
import styled from "styled-components";
import { Message } from "./Message";
import { Message as MessageModel } from "src/model";
import { useStore } from "src/lib/Store";

const Root = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const messages: MessageModel[] = [
  {
    authorId: "2",
    authorUsername: "snowflake",
    content: "snowflakesnowflakesnowflake",
    timestamp: Date.now(),
  },
  {
    authorId: "1",
    authorUsername: "cupcake",
    content: "cupcakecupcakecupcake",
    timestamp: Date.now(),
  },
  {
    authorId: "1",
    authorUsername: "cupcake",
    content: "cupcakecupcakecupcake",
    timestamp: Date.now(),
  },
  {
    authorId: "2",
    authorUsername: "snowflake",
    content: "snowflakesnowflakesnowflake",
    timestamp: Date.now(),
  },
];

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
