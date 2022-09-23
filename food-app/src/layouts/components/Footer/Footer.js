import classNames from 'classnames/bind'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faAmazon } from '@fortawesome/free-brands-svg-icons'

import Button from '../../../Components/Button/Button'
import logo from '../../../assets/images/logo.svg'
import Styles from './Footer.module.scss'

const cx = classNames.bind(Styles)

function Footer(){
    return(
        <div className={cx('wrapper')}>
            <div id='container'>
                <div className={cx('header')}>
                    <h1 className={cx('header-title')}>food app</h1>
                    <div className={cx('header-icon')}>
                        <Button 
                            href='#'
                            btnIcon
                            icon = {<FontAwesomeIcon icon={faFacebook} className={cx('icon')} />}
                        />
                        <Button 
                            href='#'
                            btnIcon
                            icon = {<FontAwesomeIcon icon={faInstagram} className={cx('icon')} />}
                        />
                        <Button 
                            href='#'
                            btnIcon
                            icon = {<FontAwesomeIcon icon={faYoutube} className={cx('icon')} />}
                        />
                        <Button 
                            href='#'
                            btnIcon
                            icon = {<FontAwesomeIcon icon={faAmazon} className={cx('icon')} />}
                        />
                    </div>
                </div>
                <Box sx={{flexGrow:2}}>
                    <Grid container spacing={2}>   
                        <Grid item xs={3}>
                            <section className={cx('logo')}>
                                <img src={logo} alt='logo' />
                            </section>
                        </Grid> 
                        <Grid item xs={6}>
                            <section className={cx('content')}>
                                <ul className={cx('content-title')}>
                                    <li>home</li>
                                    <li>menu</li>
                                    <li>story</li>
                                    <li>detox</li>
                                    <li>locations</li>
                                </ul>
                                <ul className={cx('content-support')}>
                                    <li>contact</li>
                                    <li>blog</li>
                                    <li>catering</li>
                                    <li>delivery</li>
                                </ul>
                            </section>
                        </Grid>
                        <Grid item xs={3}>
                            <section className={cx('address')}>
                                <Box sx={{flexGrow:2}}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={2} >
                                            <ul>
                                                <li><FontAwesomeIcon icon={faPhone} className={cx('icon')} /></li>
                                                <li><FontAwesomeIcon icon={faAddressCard}  className={cx('icon')} /></li>
                                                <li><FontAwesomeIcon icon={faMap} className={cx('icon')} /></li>
                                            </ul>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <ul>
                                                <li>
                                                    <span>+0909090909</span>
                                                </li>
                                                <li>
                                                    <span>foodapp@gmail.com</span>
                                                </li>
                                                <li>
                                                    <span>88 sam son, viet nam</span>
                                                </li>
                                                <div className={cx('icon')}>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </ul>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </section>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Footer