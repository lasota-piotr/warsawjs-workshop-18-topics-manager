import React from 'react';
import styled from 'styled-components';
import Topic from './Topic';

const TopicsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

const Topics = ({ userData, addUser, topics }) => {
  return (
    <TopicsLayout>
      {topics.map((topic) => (
        <Topic topic={topic} key={topic.id} userData={userData} addUser={addUser} />
      ))}
    </TopicsLayout>
  );
};

export default Topics;
