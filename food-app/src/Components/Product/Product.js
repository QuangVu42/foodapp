import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Button from '../Button/Button'
import Style from './Product.module.scss'

const cx = classNames.bind(Style)

function Product({
    to,
    img, name, dsc, country, price, rate, 
    columnTwo, columnThree, columnFour,
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
        columnTwo
    })
    // <div>favourite</div>
    // <span>{number}</span>
    return(
        <div className= {Classes} {...props}>
           <Comp to={to} state={{img, name, dsc, country, price, rate}}>
                <section className={cx('image')}>
                    <img src={img} alt='not' className={cx('img')} />
                </section>
                <section className={cx('content')}>
                    <h3>{name}</h3>
                    <p>{dsc}</p>
                    <div className={cx('box')}>
                        <p className={cx('box-address')}>
                            <FontAwesomeIcon icon={faLocationDot}  className={cx('icon')} />
                            {country}
                        </p>
                    </div>
                </section>
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
        </div>
    )
}

export default Product