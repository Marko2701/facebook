import React from 'react';
import './Contacts.css';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='contacts__top'>
        <h3>Contacts</h3>
        <div className='contacts__icons'>
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>

      <div className='contacts__bottom'>
        <div className='contacts__friend'>
          <Avatar src='https://randomuser.me/api/portraits/women/68.jpg'/>
          <h4>Jane Doe</h4>
        </div>
        <div className='contacts__friend'>
          <Avatar src='https://randomuser.me/api/portraits/men/43.jpg'/>
          <h4>Ed Morris</h4>
        </div>
        <div className='contacts__friend'>
          <Avatar src='https://randomuser.me/api/portraits/women/44.jpg'/>
          <h4>Elizabeth Wong</h4>
        </div>
        <div className='contacts__friend'>
          <Avatar src='https://randomuser.me/api/portraits/women/93.jpg'/>
          <h4>Amy Smith</h4>
        </div>
        <div className='contacts__friend'>
          <Avatar src='https://randomuser.me/api/portraits/men/12.jpg'/>
          <h4>James Arthur</h4>
        </div>
        <div className='contacts__friend'>
          <Avatar src='https://randomuser.me/api/portraits/men/47.jpg'/>
          <h4>David Brooks</h4>
        </div>
        
      </div>
    </div>
  );
};

export default Contacts;
