import React from 'react';
import '../css/header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderItem from './HeaderItem';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="" />
                <div className="header-search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header-right">
                <HeaderItem Icon={HomeIcon} title='Home' />
                <HeaderItem Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderItem Icon={WorkIcon} title='Jobs' />
                <HeaderItem Icon={MessageIcon} title='Messaging'/>
                <HeaderItem Icon={NotificationsIcon} title='Notifications'/>
                <HeaderItem avatar='./myPhoto.jpg' title='Me'/>
            </div>
        </div>
    )
}

export default Header
