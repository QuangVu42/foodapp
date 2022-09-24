import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button/Button'
import Style from './Product.module.scss'

const cx = classNames.bind(Style)

function Product({
    img,number,title,content,address,price, 
    columnTwo, columnThree, columnFour,
    ...passProps
}){
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
            <section className={cx('image')}>
                <img src={img} alt='not' className={cx('img')} />
            </section>
            <section className={cx('content')}>
                <h3>{title}</h3>
                <p>{content}</p>
                <div className={cx('box')}>
                    <p className={cx('box-address')}>
                        <FontAwesomeIcon icon={faLocationDot}  className={cx('icon')} />
                        {address}
                    </p>
                </div>
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