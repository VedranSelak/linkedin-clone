import { Avatar } from '@material-ui/core'
import { forwardRef } from 'react'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import InputOption from './InputOption'
import '../css/post.css'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post-header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post-body">
                <p>{message}</p>
            </div>
            <div className="post-buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='grey'/>
                <InputOption Icon={ChatOutlinedIcon} title='Comment' color='grey'/>
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='grey'/>
                <InputOption Icon={SendOutlinedIcon} title='Send' color='grey'/>
            </div>
        </div>
    )
})

export default Post
