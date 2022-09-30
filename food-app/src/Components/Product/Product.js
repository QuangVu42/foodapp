import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar, faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import Button from '../Button/Button'
import Style from './Product.module.scss'

const cx = classNames.bind(Style)

function Product({
    to,
    border,
    img, name, dsc, country, price, rate, 
    item, columnTwo, columnThree, columnFour,
    ...passProps
}){
    let Comp = 'div'
    if(to){
        Comp = Link
    }

    const props = {
        ...passProps
    }
    const Classes= cx('wrapper',{
        columnFour,
        columnThree,
        columnTwo, 
        item,
    })
    
    return(
        <div className= {Classes} {...props} style={{borderBottom:(border ? "1px solid var(--blue)": "" )}}>
           <Comp to={to} state={{img, name, dsc, country, price, rate}}>
                <div className= {cx('header')}>
                    <section className={cx('image')}>
                        <img src={img} alt='Error' className={cx('img')} />
                    </section>
                    <section className={cx('content')}>
                        <h3>
                            {name}
                            <span className={cx('rate')}>
                                <FontAwesomeIcon icon={faStar}  className={cx('icon')} />
                                {rate}
                            </span>
                        </h3>
                        <p>{dsc}</p>
                        <div className={cx('box')}>
                            <p className={cx('box-address')}>
                                <FontAwesomeIcon icon={faLocationDot}  className={cx('icon')} />
                                {country}
                            </p>
                        </div>
                    </section>
                </div>
           </Comp>
            <section className={cx('footer')}>
                <div className={cx('btn')}>
                    <Button 
                        id="btn-product"
                        circle
                        href="#" 
                        children={price}
                        element={
                            <div className={cx('box')}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        }
                        icon = {<FontAwesomeIcon icon={faDollar} className={cx('icon')} /> }
                    />
                    <Button 
                        id="btn-add"
                        primary
                        href="#" 
                        children={'buy'}
                        icon = {<FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />}
                    />
                </div>
            </section>
            <span className={cx('rate')}>
                <FontAwesomeIcon icon={faStar}  className={cx('icon')} />
                {rate}
            </span>
        </div>
    )
}

export default Product