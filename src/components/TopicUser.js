import React from 'react';


const TopicUser = ({user}) => {
  const { name } = user;
  console.log(user);
  return (
    <li>
      {name}
    </li>
  );
};

export default TopicUser;
