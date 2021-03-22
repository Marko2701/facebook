import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useStateValue } from '../../StateProvider';

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <img src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png' alt='facebook logo'/>
        <div className='header__input'>
          <SearchIcon />
          <input type='text' placeholder='Search...'/>
        </div>
      </div>

      <div className='header__center'>
        <div className='header__option header__option--active'>
          <HomeIcon fontSize='large'/>
        </div>
        <div className='header__option'>
          <FlagIcon fontSize='large'/>
        </div>
        <div className='header__option'>
          <SubscriptionsIcon fontSize='large'/>
        </div>
        <div className='header__option'>
          <StorefrontIcon fontSize='large'/>
        </div>
        <div className='header__option'>
          <SupervisedUserCircleIcon fontSize='large'/>
        </div>
      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton 
          aria-controls='simple-menu' 
          aria-haspopup='true' 
          onClick={handleClick}
        >
          <ExpandMoreIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className='header__menu'
        >
          <MenuItem onClick={handleClose} >
            <Avatar src={user.photoURL}/>
            <div className='header__menu-info'>
              <h4>{user.displayName}</h4>
              <p>See your profile</p>
            </div>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <FeedbackIcon />
            <h4>Give Feedback</h4>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <SettingsIcon />
            <h4>Settings & Privacy</h4>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <HelpIcon />
            <h4>Help & Support</h4>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Brightness2Icon />
            <h4>Dark Mode</h4>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ArrowBackIcon />
            <h4>Switch to Classic Facebook</h4>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ExitToAppIcon />
            <h4>Logout</h4>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;


