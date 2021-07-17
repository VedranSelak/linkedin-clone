import { logout } from '../features/userSlice';
import { useDispatch } from 'react-redux'
import '../css/header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderItem from './HeaderItem';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from '../firebase';

const Header = () => {
    const dispatch = useDispatch();
    const doLogout = () => {
        dispatch(logout());
        auth.signOut();
    };
    return (
        <div className='header'>
            <div className="header-left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="" />
                <div className="header-search">
                    <SearchIcon />
                    <input placeholder='Search...' type="text" />
                </div>
            </div>
            <div className="header-right">
                <HeaderItem Icon={HomeIcon} title='Home' />
                <HeaderItem Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderItem Icon={WorkIcon} title='Jobs' />
                <HeaderItem Icon={MessageIcon} title='Messaging'/>
                <HeaderItem Icon={NotificationsIcon} title='Notifications'/>
                <HeaderItem avatar='./myPhoto.jpg' title='Me' onClick={doLogout}/>
            </div>
        </div>
    )
}

export default Header
