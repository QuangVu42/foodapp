import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faBurger, faStore, faCartShopping, faUserAlt } from '@fortawesome/free-solid-svg-icons';

import Styles from './Header.module.scss';
import Logo from '../../../assets/images/logo.svg'
import Button from '../../../Components/Button/Button'

const cx = classNames.bind(Styles)

function Header (){
    return(
        <div className= {cx('warpper')}>
            <header className={cx('header','container')}>
                <div className={cx('header-navbar')}>
                        <img  className={cx('header-logo')} src={Logo} alt="don't logo" />
                        <ul className={cx('navbar')}>
                            <li className={cx('navbar-item')}>
                                <Button 
                                    item 
                                    href="https://www.facebook.com/" 
                                    childern={'page'} 
                                    icon={<FontAwesomeIcon icon={faHome} className={cx('icon')} />}
                                    />
                            </li>
                            <li className={cx('navbar-item')}>
                                <Button 
                                    item 
                                    href="https://www.facebook.com/" 
                                    childern= {'order online'}
                                    icon = {<FontAwesomeIcon icon={faBurger}  className={cx('icon')} />}
                                    />
                            </li>
                            <li className={cx('navbar-item')}>
                                <Button 
                                    item 
                                    href="https://www.facebook.com/" 
                                    childern ={'news'}
                                    icon = {<FontAwesomeIcon icon={faNewspaper}  className={cx('icon')} />}
                                />
                            </li>
                            <li className={cx('navbar-item')}>
                                <Button 
                                    item 
                                    href="https://www.facebook.com/"
                                    childern={'store localtions'} 
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
                            <Button item href="https://www.facebook.com/" childern={'sign in'} />
                        </div>
                </div>
            </header>
        </div>
    )
}

export default Header