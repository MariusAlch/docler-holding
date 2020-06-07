import React from "react";
import { Layout } from "src/lib/Layout";
import { Messages } from "./Messages";
import { MessageInput } from "./MessageInput";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`;

export function ChatView() {
  return (
    <Layout>
      <Root>
        <Messages />
        <MessageInput />
      </Root>
    </Layout>
  );
}
