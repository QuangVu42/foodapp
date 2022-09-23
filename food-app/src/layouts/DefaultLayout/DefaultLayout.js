import classNames from 'classnames/bind'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Styles from './DefaultLayout.module.scss'

const cx = classNames.bind(Styles)

function DefaultLayout ({childern}){
    console.log(childern)
    return(
        <div className={cx('wrapper')}>
            <Header />
            <div>{childern}</div>
            <Footer />
        </div>
    )
}

export default DefaultLayout