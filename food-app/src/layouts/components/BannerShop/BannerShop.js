import classNames from 'classnames/bind'

import Styles from './BannerShop.module.scss'

const cx = classNames.bind(Styles)

function BannerShop(){
    return(
        <div className={cx('wrapper')}>
            <div id='container'>
                <section className={cx('banner-shop')}>
                    <h1 className={cx('title')}>best foods</h1>
                    <p className={cx('content')}>enjoy every taste of the product</p>
                </section>
            </div>
        </div>
    )
}

export default BannerShop