import classNames from 'classnames/bind'

import Styles from './Slider.module.scss'
const cx = classNames.bind(Styles)

function Slider(){
    return(
        <div className={cx('warpper')}>
        </div>
    )
}

export default Slider