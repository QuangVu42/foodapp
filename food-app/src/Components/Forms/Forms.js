import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faUser, faEnvelope, faKey, faMobile} from '@fortawesome/free-solid-svg-icons'

import Styles from './Forms.module.scss'
import Button from '../Button/Button'
import img from '../../assets/images/login.webp'

const cx = classNames.bind(Styles)

function Forms({
    signIn=false, signUp= false ,forgotPass = false,
    title, btnContent,
    onClick, ...passProps
}){
    const props = {
        onClick,
        ...passProps
    }
    const Classes = cx('wrapper',{
        signIn,
        signUp,
        forgotPass
    })

    return(
        <div className={cx('container')}>
            <div className={Classes} {...props}>
                <div className={cx('title')}>
                    <img src={img} alt='not' />
                    <h1>{title}</h1>
                </div>
                <div className={cx('form')}>
                    <ul className={cx('form_item')}>
                        <li className={cx('form_item-username')}>
                            <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                            <input type="text" className={cx('form-input')} placeholder = "Name" />
                        </li>
                        <li className={cx('form_item-email')}>
                            <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                            <input type="email" className={('form-input')} placeholder = "Email" />
                        </li>
                        <li className={cx('form_item-phone')}>
                            <FontAwesomeIcon icon={faMobile} className={cx('icon')} />
                            <input type="number" className={('form-input')} placeholder = "Phone Number" />
                        </li>
                        <li className={cx('form_item-password')}>
                            <FontAwesomeIcon icon={faKey} className={cx('icon')} />
                            <input type="password" className={cx('form-input')} placeholder = "Password" />
                        </li>
                        <li className={cx('from_item-comfirmPass')}>
                            <FontAwesomeIcon icon={faKey} className={cx('icon')} />
                            <input type="password" className={cx('form-input')} placeholder ="Comfirm Password" />
                        </li>
                    </ul>
                    <Button 
                        login
                        href="#" 
                        children={btnContent}
                    />
                </div>
                <div className={cx('network')}>
                    <FontAwesomeIcon icon={faInstagram}  className={cx('icon')} />
                    <FontAwesomeIcon icon={faTwitter} className={cx('icon')} />
                    <FontAwesomeIcon icon={faFacebook} className={cx('icon')} />
                </div>
                <div className={cx('footer')}>
                    <p className={cx('footer-signin')}>Don't have an Account ? <span>Sign up</span></p>
                    <p className={cx('footer-signup')}>Have an Account ? <span>Sign In</span></p>
                </div>
            </div>
        </div>
    )
}
export default Forms