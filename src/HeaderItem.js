import './headerItem.css';
import { Avatar } from '@material-ui/core';
const HeaderItem = ({ avatar,title, Icon}) => {
    return (
        <div className='header-item'>
            {Icon && <Icon className='header-item-icon' />}
            {avatar && (
                <Avatar className='header-item-icon' src={avatar} />
            )}
            <h3 className='header-item-title'>{title}</h3>
        </div>
    )
}

export default HeaderItem
