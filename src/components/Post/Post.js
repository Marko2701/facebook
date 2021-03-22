import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Post = ({
  profilePicture,
  image,
  username,
  timestamp,
  message
}) => {
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar 
          className='post__avatar'
          src={profilePicture}
        />
        <div className='post__topInfo'>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className='post__buttom'>
        <p>{message}</p>
      </div>

      <div className='post__image'>
        <img src={image} alt=''/>
      </div>

      <div className='post__options'>
        <div className='post__option'>
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className='post__option'>
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className='post__option'>
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className='post__option'>
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  profilePicture: PropTypes.string,
  image: PropTypes.string,
  username: PropTypes.string,
  timestamp: PropTypes.object,
  message: PropTypes.string
};

export default Post;
