import '../css/sidebar.css'
import { Avatar } from '@material-ui/core';

const SideBar = () => {

    const recentItem = (topic) => (
        <div className="sidebar-item">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar-top"> 
                <img src="./VedranLinkedinCover.png" alt="" />
                <Avatar className='sidebar-avatar' />
                <h2>Vedran Selak</h2>
                <h4>IT Student | International Burch University | Looking for a software development internship</h4>
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className='sidebar-stat-num'>567</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className='sidebar-stat-num'>753</p>
                </div>
            </div>
            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem('react')}
                {recentItem('front-end dev')}
                {recentItem('programming')}
                {recentItem('AI')}
                {recentItem('Machine Learning')}
            </div>
        </div>
    )
}

export default SideBar
