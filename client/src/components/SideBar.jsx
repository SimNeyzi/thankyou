import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData.jsx';

const NavMenu = styled.nav`
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
`;

const NavLine = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
  color: #16191b;
  width: 95%;
  border-radius: 20px;
  &: hover {
    background-color: #7a77ff;
  }
`;

const MenuItems = styled.ul`
  width: 100%;
`;

const Span = styled.span`
  margin-left: 16px;
`;

function SideBar() {
  return (
    <div>
      <NavMenu>
        <MenuItems>
          {SideBarData.map((item, index) => (

            <Link style={{ textDecoration: 'none' }} to={item.path} key={index}>
              <NavLine>
                {item.icon}
                <Span>{item.title}</Span>
              </NavLine>
            </Link>

          ))}
        </MenuItems>
      </NavMenu>
    </div>
  );
}

export default SideBar;
