import React from 'react';
import PropTypes from 'prop-types';
import Response from './Response';
import Message from './Message';
import Typing from './Typing';

const propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.object.isRequired,
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf('response', 'message', 'typing').isRequired,
    })
  ),
};

const Item = ({ message }) => {
  if (message.type === 'response') {
    return <Response message={message} from={message.from} />;
  } else if (message.type === 'message') {
    return <Message message={message} from={message.from} />;
  } else if (message.type === 'typing') {
    return <Typing message={message} from={message.from} />;
  } else {
    return console.warn(`Expected message type, got ${message.type}`);
  }
};

const MessageHistory = ({ messages }) => {
  return (
    <ul className='chat-history'>
      {messages.map((message) => (
        <li key={message.id} className='clearfix'>
          <Item message={message} />
        </li>
      ))}
    </ul>
  );
};

MessageHistory.propTypes = propTypes;

export default MessageHistory;
