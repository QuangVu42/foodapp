import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faBurger, faStore, faCartShopping, faUserAlt } from '@fortawesome/free-solid-svg-icons';

import Styles from './Header.module.scss';
import Logo from '../../../assets/images/logo.svg'
import Button from '../../../Components/Button/Button'

const cx = classNames.bind(Styles)

function Header (){

    const [background, setBackground] = useState(false)

    useEffect(()=>{
        const changeBackground = () =>{
            if(window.scrollY>=200){
                setBackground(true)
            }else{
                setBackground(false)
            }
        }
        window.addEventListener('scroll', changeBackground)
    })

    return(
        <div className= { background ? cx('wrapper','active') : cx('wrapper')}>
            <header className={cx('header')} id="container-header">
                <div className={cx('header-navbar')}>
                        <img  className={cx('header-logo')} src={Logo} alt="don't logo" />
                        <ul className={cx('navbar')}>
                            <li className={cx('navbar-item')}>
                                <Button 
                                    item 
                                    to={'/'}  
                                    children={'page'} 
                                    icon={<FontAwesomeIcon icon={faHome} className={cx('icon')} />}
                                    />
                            </li>
                            <li className={cx('navbar-item')}>
                                <Button 
                                    item 
                                    to={'/shop'} 
                                    children= {'order online'}
                                    icon = {<FontAwesomeIcon icon={faBurger}  className={cx('icon')} />}
                                    />
                            </li>
                            <li className={cx('navbar-item')}>
                                <Button 
                                    item 
                                    to={'/'} 
                                    children ={'news'}
                                    icon = {<FontAwesomeIcon icon={faNewspaper}  className={cx('icon')} />}
                                />
                            </li>
                            <li className={cx('navbar-item')}>
                                <Button 
                                    item 
                                    to={'/'} 
                                    children={'store localtions'} 
                                    icon={<FontAwesomeIcon icon={faStore}  className={cx('icon')} />}
                                />
                            </li>
                        </ul>
                </div>
                <div className={cx('header-right')}>
                        <div className={cx('navbar-cart')}>
                            <FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />
                        </div>
                        <div className={cx('navbar-account')}>
                            <div className={cx('account-icon')}>
                                <FontAwesomeIcon icon={faUserAlt}  className={cx('icon')} />
                            </div>
                            <Button item to={'/login'}  children={'sign in'} />
                        </div>
                </div>
            </header>
        </div>
    )
}

export default Header