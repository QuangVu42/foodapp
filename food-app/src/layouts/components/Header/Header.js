import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faBurger, faStore, faCartShopping, faUserAlt, faX, faList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Styles from './Header.module.scss';
import Logo from '../../../assets/images/logo.svg'
import Button from '../../../Components/Button/Button'

const cx = classNames.bind(Styles)

function Header (){

    // background scroll
    const [background, setBackground] = useState(false)

    // set number product length
    const [length, setLength] = useState()

    // show menu on reponsive
    const [ showMenu, setShowMenu ] = useState(false)

    useEffect(()=>{
        setLength(localStorage.getItem('count') || 0)       
    },[])

    // set background scroll
    useEffect(()=>{
        const changeBackground = (e) =>{
            if(window.scrollY>=200){
                setBackground(true)
            }else{
                setBackground(false)
            }
        }
        window.addEventListener('scroll', changeBackground,{passive:true})
    },[]);

    return(
        <div className= { background ? cx('wrapper','active') : cx('wrapper')}>
            <header className={cx('header')} id="container-header">
                <div className={cx('header-navbar')}>
                        <img  className={cx('header-logo')} src={Logo} alt="Error" />
                        <div className={cx('header-sildebar')}>
                            <FontAwesomeIcon 
                                icon={faList} 
                                onClick={
                                    ()=> setShowMenu(true)
                                }
                            />
                        </div>
                        <div 
                            className={showMenu ? cx('active-background'): ''}
                            onClick={()=> setShowMenu(false)}
                        ></div>
                        <ul className={showMenu ? cx('navbar','active') : cx('navbar')}>
                            <div className={cx('closed')}>
                                    <FontAwesomeIcon 
                                        icon={faX}
                                        onClick={() => setShowMenu(false)} 
                                    />
                            </div>
                            <li className={cx('navbar-item')} onClick={() => setShowMenu(false)} >
                                <Button 
                                    item 
                                    to={'/'}  
                                    children={'page'} 
                                    icon={<FontAwesomeIcon icon={faHome} className={cx('icon')} />}
                                    />
                            </li>
                            <li className={cx('navbar-item')} onClick={() => setShowMenu(false)} >
                                <Button 
                                    item 
                                    to={'/shop'} 
                                    children= {'order online'}
                                    icon = {<FontAwesomeIcon icon={faBurger}  className={cx('icon')} />}
                                    />
                            </li>
                            <li className={cx('navbar-item')} onClick={() => setShowMenu(false)} >
                                <Button 
                                    item 
                                    to={'/'} 
                                    children ={'news'}
                                    icon = {<FontAwesomeIcon icon={faNewspaper}  className={cx('icon')} />}
                                />
                            </li>
                            <li className={cx('navbar-item')} onClick={() => setShowMenu(false)} >
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
                            <Button item to={'/cart'}  icon={<FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />} />
                            <Link to={'/cart'} className={cx('cart-number')} id="count-length">
                                0
                            </Link>
                        </div>
                        <div className={cx('navbar-account')}>
                            <div className={cx('account-icon')}>
                                <FontAwesomeIcon icon={faUserAlt}  className={cx('icon')} />
                            </div>
                            <Button item to={'/login'}  children={'sign in'}  />
                        </div>
                </div>
            </header>
        </div>
    )
}

export default Header