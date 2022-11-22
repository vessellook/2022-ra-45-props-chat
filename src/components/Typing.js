import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.shape({
    time: PropTypes.string.isRequired,
  }).isRequired,
};

const Typing = ({ from: { name }, message: { time } }) => {
  return (
    <>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="">
        <i className="fa fa-circle typing"></i>
        <i className="fa fa-circle typing"></i>
        <i className="fa fa-circle typing"></i>
      </div>
    </>
  );
};

Typing.propTypes = propTypes;

export default Typing;
