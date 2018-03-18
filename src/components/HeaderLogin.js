import React from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';
// import { getUser } from '../helpers/users';


const LoginButton = styled.button`
  background-color: transparent;
`;

const HeaderLogged = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.5rem;
  align-items: center;
`;

class HeaderLogin extends React.Component {


  // const user = (loggedUserId && getUser(loggedUserId)) || {};
  // const { name } = user;
  render() {
    const { userData, loginHandle, logoutHandle } = this.props;
    const { avatar_url: avatarUrl, name } = userData;
    return (
      !userData.id ? (
          <LoginButton onClick={loginHandle}>
            Zaloguj
          </LoginButton>
      ) : (
        <HeaderLogged>
          <UserInfo avatarUrl={avatarUrl} name={name} />
          <LoginButton onClick={logoutHandle}>
            Wyloguj
          </LoginButton>
        </HeaderLogged>
      )
    );
  }
}

export default HeaderLogin;
