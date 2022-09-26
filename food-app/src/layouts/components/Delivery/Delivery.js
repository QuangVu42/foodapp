import classNames from 'classnames/bind'
import Grid  from '@mui/material/Grid'
import Box  from '@mui/material/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import Styles from './Delivery.module.scss'

import imgDelivery from '../../../assets/svgs/big-delivery.e0228901.svg'
import iconDelivery from '../../../assets/svgs/small-delivery.5b86892b.svg'
import Button from '../../../Components/Button/Button'
const cx = classNames.bind(Styles)

function Delivery(){
    return (
        <div className={cx('wrapper')}>
            <div id="container">
                <div className={cx('delivery')}>
                    <Box sx={{flexGrow:2}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <section className={cx('delivery_content')}>
                                    <div className={cx('delivery_content-header')}>
                                        <h1>delivery</h1>
                                        <span>A Moments Of Delivered <span>On Right Time & Place</span></span>
                                        <p>Food G is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon's Exmouth Market.
                                        With glazed frontage on two sides of the building, overlooking the market and a bustling London inteon.</p>
                                    </div>
                                    <div className={cx('contact')}>
                                        <img src={iconDelivery} alt="don't img" className={cx('icon')} />
                                        <div className={cx('contact_number')}>
                                            <p>delivery order num</p>
                                            <span>123-456-789</span>
                                        </div>
                                    </div>
                                    <div className={cx('btn')} >
                                        <Button 
                                            primary
                                            to={'/shop'} 
                                            children={'order now'}
                                            icon = {<FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />}
                                        />
                                    </div>
                                </section>
                            </Grid>
                            <Grid item xs={6}>
                                <img src={imgDelivery} alt="don't img" className={cx('delivery_content-img')} />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Delivery
