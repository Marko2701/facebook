import React from 'react';
import PropTypes from 'prop-types';
import './Story.css';
import { Avatar } from '@material-ui/core';

const Story = ({
  backgroundImage,
  profileImage,
  title
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className='story'>
      <Avatar 
        className='story__avatar'
        src={profileImage}
      />
      <h4>{title}</h4>
    </div>
  );
};

Story.propTypes = {
  backgroundImage: PropTypes.string,
  profileImage: PropTypes.string,
  title: PropTypes.string
};

export default Story;
