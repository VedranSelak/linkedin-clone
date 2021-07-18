import '../css/rightbar.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

const RightBar = () => {

    const getArticle = (heading, subtitle) => (
        <div className="right-bar-article">
            <div className="right-bar-article-left">
                <FiberManualRecordIcon/>
            </div>
            <div className="right-bar-article-right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='right-bar'>
            <div className="right-bar-header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {getArticle('AI is taking over!', 'Terrible news - 589 readers')}
            {getArticle('Elon Musk speaks about crypto!', 'Crypto news - 1987 readers')}
            {getArticle('How to bulid a good website!', 'Programming news - 476 readers')}
            {getArticle('Did BMW designer get fired', 'Car news - 2467 readers')}
            {getArticle('Coronavirus in EU', 'Top news - 589 readers')}
            
        </div>
    )
}

export default RightBar
