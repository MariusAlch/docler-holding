import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { plainGray } from "src/lib/colors";
import { Text } from "src/lib/Text";
import { BlinkingText } from "src/lib/BlinkingText";
import { useStore } from "src/lib/Store";

const Nav = styled.div`
  border-bottom: 1px solid ${plainGray};
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

export const Layout: React.FunctionComponent = ({ children }) => {
  const { messages } = useStore();

  return (
    <>
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
