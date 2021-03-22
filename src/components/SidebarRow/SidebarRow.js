import React from 'react';
import PropTypes from 'prop-types';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';

const SidebarRow = ({
  src,
  Icon,
  title

}) => {
  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src}/>}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

SidebarRow.propTypes = {
  src: PropTypes.string,
  Icon: PropTypes.string,
  title: PropTypes.string
};

export default SidebarRow;
