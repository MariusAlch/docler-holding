import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { plainGray } from "src/lib/colors";

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
`;

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Nav>
        <NavItem>
          <Link to="/">Chat</Link>
        </NavItem>
        <NavItem>
          <Link to="/settings">Settings</Link>
        </NavItem>
      </Nav>
      {children}
    </>
  );
};
