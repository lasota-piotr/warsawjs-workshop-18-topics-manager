import React from 'react';
import Avatar from './Avatar';
import styled from 'styled-components';

const UserInfoLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0.5rem;
  align-items: center;
`;

const UserInfo = ({avatarUrl, name}) => {
  return (
    <UserInfoLayout>
      <Avatar src={avatarUrl} />
      {name}
    </UserInfoLayout>
  );
};

export default UserInfo;
