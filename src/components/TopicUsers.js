import React from 'react';
import TopicUser from './TopicUser';

const TopicUsers = ({users}) => {
  return (
    <ul>
      {users.map((user, i) => (
        <TopicUser user={user} key={i} />
      ))}
    </ul>
  );
};

export default TopicUsers;
