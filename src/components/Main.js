import React from 'react';
import styled from 'styled-components';
import Topics from './Topics';

const MainLayout = styled.div`
  padding: 1rem;
`;

const Main = ({userData, addUser, topics}) => {
  return (
    <MainLayout>
      <Topics userData={userData} addUser={addUser} topics={topics} />
    </MainLayout>
  );
};

export default Main;
