import '../css/headerItem.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
const HeaderItem = ({ avatar, title, Icon, onClick}) => {

    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className='header-item'>
            {Icon && <Icon className='header-item-icon' />}
            {avatar && (
                <Avatar className='header-item-icon' src={user?.photoURL}>{user?.email[0]}</Avatar>
            )}
            <h3 className='header-item-title'>{title}</h3>
        </div>
    )
}

export default HeaderItem
