import classNames from 'classnames/bind'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCartShopping, faMinus, faTruck , faPlus, faStar as Starfullcolor, faTag} from '@fortawesome/free-solid-svg-icons'
import { faHeart, faStar as Starcolorborder} from '@fortawesome/free-regular-svg-icons'
import { useLocation } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify';

import Styles from './Details.module.scss'
import Button from '../../../Components/Button/Button'
import Detail from '../../../page/Detail/Detail'

const cx = classNames.bind(Styles)

function Details() {
    const location = useLocation()
    const { img, name, dsc, country, price, rate } = location.state

    return(
        <div className={cx('wrapper')}>
            <section className={cx('carts')}>
               <div id="container-header">
                    <Box sx={{flexGrow:2}} className={cx('box')}>
                        <Grid container spacing={3}>
                            <Grid item xs={6} className={cx('image')}>
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: "Error" ,
                                        isFluidWidth: true,
                                        src: img
                                    },
                                    largeImage: {
                                        src: img,
                                        width: 1200,
                                        height: 1800
                                    }
                                }} />
                                <div className={cx('image-change')}>
                                    <div className={cx('img')}>
                                        <img src={img} alt="Error" />
                                    </div>
                                    <div className={cx('img')}>
                                        <img src={img} alt="Error" />
                                    </div>
                                    <div className={cx('img')}>
                                        <img src={img} alt="Error" />
                                    </div> 
                                    <div className={cx('img')}>
                                        <img src={img} alt="Error" />
                                    </div> 
                                </div>
                            </Grid>
                            <Grid item xs={6} className={cx('content')}>
                                <h1 className={cx('title')}>{name}</h1>
                                <span>
                                    {[...Array(rate)].map((e,index)=>(<FontAwesomeIcon icon={Starfullcolor} className={cx('vote')} key ={index} />))}
                                    {[...Array(5-rate)].map((e,index)=>(<FontAwesomeIcon icon={Starcolorborder} className={cx('noVote')} key ={index} />))}
                                </span>
                                <div className={cx('price')}>${price}</div>
                                <div className={cx('content-infor')}>
                                    <p><span>category:</span> best food</p>
                                    <p><span>county:</span> {country}</p>
                                </div>
                                <p>{dsc}</p>
                                <div className={cx('content-add')}>
                                    <div className={cx('content-btn')}>
                                        <button type="button" className={cx('btn')}>
                                            <span><FontAwesomeIcon icon={faMinus}  className={cx('icon')} /></span>
                                        </button>
                                        <span className={cx('number')}>1</span>
                                        <button type="button" className={cx('btn')}>
                                            <span><FontAwesomeIcon icon={faPlus} className={cx('icon')} /></span>
                                        </button>
                                    </div>
                                    <div className={cx('btn')}>
                                        <Button 
                                            primary
                                            href='#'
                                            children={'add to cart'}
                                            icon = {<FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />}
                                        />
                                    </div>
                                    <span>
                                        <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                                    </span>
                                </div>
                                <ul className={cx('content-redow')}>
                                    <li>
                                        <FontAwesomeIcon icon={faTruck} className={cx('icon')} />
                                        <p>free global shipping on all orders</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCalendar}  className={cx('icon')} />
                                        <p>2 hours easy return if you change your mind</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faTag} className={cx('icon')} />
                                        <p>order before noon for same day dispatch</p>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Box>
               </div>
            </section>
        </div>
    )
}

export default Details