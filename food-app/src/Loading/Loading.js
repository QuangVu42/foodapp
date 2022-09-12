import classNames from 'classnames/bind'

import Styles from './Loading.module.scss'

import loadingFoodGif from  '../assets/images/loading-food.gif'
const cx = classNames.bind(Styles)

function Loading (){
    return (
        <div className={cx('warpper')}>
            <div className={cx('container')}>
                <div className={cx('yellow')}></div>
                <div className={cx('red')}></div>
                <div className={cx('blue')}></div>
                <div className={cx('violet')}></div>
            </div>
            <img src={loadingFoodGif} alt=" don't images" className={cx('images-loading')} />
            <h1>food app</h1>
        </div>
    )
}

export default Loading