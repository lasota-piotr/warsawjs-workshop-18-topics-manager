import React from 'react';
import styled from 'styled-components';
import TopicUsers from './TopicUsers';
import TopicAddUser from './TopicAddUser';

const TopicLayout = styled.section`
  border: 1px solid black;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`;

const TopicTitle = styled.h3`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Topic = ({topic, userData, addUser}) => {
  console.log(topic);
  return (
    <TopicLayout>
      <TopicTitle>
        {topic.title}
      </TopicTitle>
      <TopicUsers users={topic.users} />
      {userData.id && (<div>
        <TopicAddUser topicId={topic.id} addUser={addUser} />
      </div>)}
    </TopicLayout>
  );
};

export default Topic;
