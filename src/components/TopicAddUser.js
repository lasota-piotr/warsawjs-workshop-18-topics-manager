import React from 'react';
import styled from 'styled-components';

const TopicAddUserButton = styled.button`
  background-color: transparent;
`;

const TopicAddUser = ({ addUser, topicId }) => {
  return (
    <TopicAddUserButton onClick={() => addUser(topicId)}>
      Add
    </TopicAddUserButton>
  );
};

export default TopicAddUser;
