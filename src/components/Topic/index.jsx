import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

//Styles
import { TopicElement } from './styles';

export function Topic({ name, stargazerCount, setTopic }) {
  return (
    <TopicElement
      data-testid="topic-element"
      onClick={() => {
        // Replace currently queried topic with this one
        setTopic(name);
      }}
      onKeyDown={(ev) => {
        // Replace currently queried topic with this one
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          setTopic(name);
        }
      }}
      tabIndex="0"
      role="button"
      aria-pressed="false">
      <div className="topic-name">
        <h2>{name}</h2>
      </div>
      <h5>
        <FontAwesomeIcon icon={faStar} />
        &nbsp;{stargazerCount}
      </h5>
    </TopicElement>
  );
}
