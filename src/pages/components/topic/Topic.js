import React from 'react';
import topicStyles from './topic.module.css';

export default function Topic({ text }) {
  return <h3 className={topicStyles.container}>{text}</h3>;
}
