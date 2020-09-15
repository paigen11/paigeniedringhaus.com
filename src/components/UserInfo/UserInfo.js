import React from 'react';
import { Follow } from 'react-twitter-widgets';

const UserInfo = (props) => {
  const { userTwitter } = props.config;
  const { expanded } = props;
  return (
    // todo style this button?
    <Follow
      username={userTwitter}
      options={{ count: expanded ? true : 'none' }}
    />
  );
};

export default UserInfo;
