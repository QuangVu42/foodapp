import classNames from 'classnames/bind'

import Styles from './LoadingProduct.module.scss'

const cx = classNames.bind(Styles)

function LoadingProduct (){
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('yellow')}></div>
                <div className={cx('red')}></div>
                <div className={cx('blue')}></div>
                <div className={cx('violet')}></div>
            </div>
            <h1>food app</h1>
        </div>
    )
}

export default LoadingProduct