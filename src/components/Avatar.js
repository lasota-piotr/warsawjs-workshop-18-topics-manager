import React from 'react';
import styled from 'styled-components';

const AvatarLayout = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 2rem;
  width: 2rem;
`;

const AvatarImg = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Avatar = ({src}) => {
  return (
    <AvatarLayout>
      <AvatarImg src={src} />
    </AvatarLayout>
  );
};

export default Avatar;
