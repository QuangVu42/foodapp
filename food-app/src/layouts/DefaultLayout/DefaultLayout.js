import classNames from 'classnames/bind'

import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'
import Styles from './DefaultLayout.module.scss'

const cx = classNames.bind(Styles)

function DefaultLayout ({childern}){
    return(
        <div className={cx('warpper')} >
            <Header />
            <Slider />
            <div>{childern}</div>
        </div>
    )
}

export default DefaultLayout