import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Nav = styled.div`
  border-bottom: 1px solid #ddd;
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
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/settings">Settings</Link>
        </NavItem>
      </Nav>
      {children}
    </>
  );
};
