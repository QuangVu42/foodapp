import classNames from 'classnames/bind'

import Forms from '../../../Components/Forms/Forms'
import Styles from './SignIn.module.scss'

const cx = classNames.bind(Styles)

function SignIn(){
    return(
        <div className={cx('wrapper')}>
            <Forms
                // signUp
                // title ='sign up'
                // btnContent = 'register'
                signIn
                title = 'sign in'
                btnContent = 'login'
            />
        </div>
    )
}

export default SignIn