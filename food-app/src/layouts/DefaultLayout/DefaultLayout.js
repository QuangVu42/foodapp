import classNames from 'classnames/bind'

import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'
import Working from '../components/Working/Working'
import Ingredients from '../components/Ingredients/Ingredients'
import BestFood from '../components/BestFood/BestFood'
import Delivery from '../components/Delivery/Delivery'
import QualityProducts from '../components/QualityProducts/QualityProducts'
import Styles from './DefaultLayout.module.scss'

const cx = classNames.bind(Styles)

function DefaultLayout ({childern}){
    return(
        <div className={cx('Home')}>
            <Header />
            <Slider />
            <Working />
            <Ingredients />
            <BestFood />
            <Delivery />
            <QualityProducts />
            <div>{childern}</div>
        </div>
    )
}

export default DefaultLayout