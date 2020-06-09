import React from "react";
import styled from "styled-components";
import { Message } from "src/model";
import { useStore } from "src/lib/Store";
import { Time } from "src/lib/Time";

const Root = styled.div<{ isOwner: boolean }>`
  display: flex;
  margin-bottom: 8px;
  margin-left: 16px;
  margin-right: 16px;
  justify-content: ${(p) => (p.isOwner ? "flex-end" : "flex-start")};
`;

const Content = styled.div<{ isOwner: boolean }>`
  max-width: 600px;
  border-radius: 4px;
  background-color: ${(p) => (p.isOwner ? p.theme.blue : p.theme.lightGray)};
  color: ${(p) => (p.isOwner ? p.theme.white : p.theme.darkGray)};
  padding: 4px 8px;
  display: inline-block;
`;

const Details = styled.div<{ isOwner: boolean }>`
  font-size: 0.75rem;
  color: #888;

  text-align: ${(p) => (p.isOwner ? "right" : "left")};
`;

interface Props {
  message: Message;
}
export function Message({ message }: Props) {
  const { settings } = useStore();

  const isOwner = message.username === settings.settings.username;

  return (
    <Root data-test="message" isOwner={isOwner}>
      <div>
        <Details data-test="details" isOwner={isOwner}>
          {!isOwner ? `${message.username} - ` : ""}
          <Time timestamp={message.timestamp} />
        </Details>
        <Content isOwner={isOwner}>{message.content}</Content>
      </div>
    </Root>
  );
}
