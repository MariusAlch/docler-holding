import React from "react";
import styled from "styled-components";
import { easyBlue, sadGray, textBlack, racingWhite } from "src/lib/colors";
import { Message } from "src/model";
import { useStore } from "src/lib/Store";
import moment from "moment";

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
  background-color: ${(p) => (p.isOwner ? easyBlue : sadGray)};
  color: ${(p) => (p.isOwner ? racingWhite : textBlack)};
  padding: 4px 8px;
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
  const formattedTime = moment(message.timestamp).format("LT");

  return (
    <Root isOwner={isOwner}>
      <div>
        <Details isOwner={isOwner}>
          {!isOwner ? `${message.username} - ` : ""}
          {formattedTime}
        </Details>
        <Content isOwner={isOwner}>{message.content}</Content>
      </div>
    </Root>
  );
}
