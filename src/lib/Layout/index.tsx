import styled, { createGlobalStyle } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { Text } from "src/lib/Text";
import { BlinkingText } from "./BlinkingText";
import { useStore } from "src/lib/Store";

const Nav = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.gray};
  display: flex;
  align-items: center;
  height: 50px;
`;

const NavItem = styled.div`
  height: 100%;
  padding: 0px 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(p) => p.theme.font};
    background-color: ${(p) => p.theme.background};
  }
`;

export const Layout: React.FunctionComponent = ({ children }) => {
  const { messages } = useStore();

  return (
    <>
      <GlobalStyle />
      <Nav>
        <NavItem>
          <Link to="/">
            {messages.unreadNotification ? (
              <BlinkingText>
                <Text textId="chat" />
              </BlinkingText>
            ) : (
              <Text textId="chat" />
            )}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/settings">
            <Text textId="settings" />
          </Link>
        </NavItem>
      </Nav>
      {children}
    </>
  );
};
