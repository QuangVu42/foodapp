import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
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
    item, columnTwo, columnThree, columnFour,
    img, name, dsc, country, price, rate, 
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
    
    // save data in localStorage
    const [count, setCount] = useState(1)
    const onchangeData = () =>{

        // set data cart up localStorage
        const datas = JSON.parse(localStorage.getItem('cart') || "[]")
        const data = {
                name: name,
                img: img, 
                dsc: dsc, 
                conuntry: country, 
                price: price, 
                rate:rate,
                count
           }
        datas.push(data)
       localStorage.setItem('cart',JSON.stringify(datas))

        // set count up localStorage
        localStorage.setItem('count',datas.length)
    }
    useEffect(() =>{
        if(count){
            document.getElementById('count-length').textContent = localStorage.getItem('count')
        }
    },[count])
    
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
                        children={'buy'}
                        icon = {<FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />}
                        onClick={()=>{
                            onchangeData()
                            setCount(count+1)
                        }}
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
Product.propTypes = {
    to: PropTypes.string.isRequired,
    border: PropTypes.bool.isRequired,
    item: PropTypes.bool.isRequired,
    columnTwo: PropTypes.bool.isRequired, 
    columnThree: PropTypes.bool.isRequired, 
    columnFour: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, 
    dsc: PropTypes.string.isRequired, 
    country: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired, 
    rate: PropTypes.number.isRequired, 
}

export default Product