import classNames from 'classnames/bind'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCartShopping, faMinus, faTruck , faPlus, faStar as Starfullcolor, faTag} from '@fortawesome/free-solid-svg-icons'
import { faHeart, faStar as Starcolorborder} from '@fortawesome/free-regular-svg-icons'

import Styles from './Carts.module.scss'
import BannerShop from '../BannerShop/BannerShop'
import Button from '../../../Components/Button/Button'
import img from  '../../../assets/images/demo.avif'
const cx = classNames.bind(Styles)

function Carts() {
    return(
        <div className={cx('wrapper')}>
            <BannerShop />
            <section className={cx('carts')}>
               <div id="container">
                    <Box sx={{flexGrow:2}} className={cx('box')}>
                        <Grid container spacing={3}>
                            <Grid item xs={6} className={cx('image')}>
                                <img src={img} alt='not' />
                            </Grid>
                            <Grid item xs={6} className={cx('content')}>
                                <h1 className={cx('title')}>alidoro</h1>
                                <span>
                                    {[...Array(5)].map((e,index)=>(<FontAwesomeIcon icon={Starfullcolor} className={cx('vote')} key ={index} />))}
                                </span>
                                <div className={cx('price')}>$66.90</div>
                                <div className={cx('content-infor')}>
                                    <p><span>category:</span> sandwiches</p>
                                    <p><span>county:</span> new york, ny</p>
                                </div>
                                <p>italian sandwich kit best sellers-4 pack</p>
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

export default Carts