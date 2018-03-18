import React from 'react';
import styled from 'styled-components';
import HeaderLogin from './HeaderLogin';

const HeaderLayout = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const HeaderTitle = styled.h1`
  flex-grow: 1;
  font-size: 1.25rem;
`;

const Header = ({ userData, loginHandle, logoutHandle }) => {
  return (
    <HeaderLayout>
      <HeaderTitle>hello from header</HeaderTitle>
      <HeaderLogin userData={userData} loginHandle={loginHandle} logoutHandle={logoutHandle}/>
    </HeaderLayout>
  );
};

export default Header;
