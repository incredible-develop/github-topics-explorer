import React from 'react';

//Styles
import { ActiveTopic } from './styles';

export const CurrentTopic = ({ topic }) => {
  return (
    <ActiveTopic>
      <h1>Topic : {topic}</h1>
    </ActiveTopic>
  );
};
