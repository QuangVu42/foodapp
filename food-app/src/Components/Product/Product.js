import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar, faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import imgError from '../../assets/images/image-not-found.png'
import Button from '../Button/Button'
import Style from './Product.module.scss'

const cx = classNames.bind(Style)

function Product({
    to,
    border,
    item, columnFour,
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
        item,
    })
    // messages in cart
    const notify = () => toast.success('Product added to cart!',{
        position: "bottom-right",
        autoClose: 1500,
        className:cx('toast-messages')
    })
    // save data in localStorage
    const [count, setCount] = useState(1)
    const onchangeData = () =>{
        // set data cart up localStorage
        const datas = JSON.parse(localStorage.getItem('cart') || "[]")
        var a = datas.some((e)=>{
            return e.name === name
        })
        const data = {
                name: name,
                img: img, 
                dsc: dsc, 
                conuntry: country, 
                price: price, 
                rate:rate,
                count
           }
        if(!a){
            datas.push(data)
            localStorage.setItem('cart',JSON.stringify(datas))
    
            // set count up localStorage
            localStorage.setItem('count',datas.length)
        }
    }
    // show count in header
    useEffect(() =>{
        if(count){
            document.getElementById('count-length').textContent = localStorage.getItem('count')
        }
    },[count])
    // images error 
    const onchangeError = (e) =>{
        e.target.onError  = null;
        e.target.src = imgError;
    }

    return(
        <div className= {Classes} {...props} style={{borderBottom:(border ? "1px solid var(--blue)": "" )}}>
           <Comp to={to} state={{img, name, dsc, country, price, rate}}>
                <div className= {cx('header')}>
                    <section className={cx('image')}>
                        <LazyLoadImage 
                            effect="blur"
                            delayTime = {3000}
                            src={img} 
                            onError = {(e)=> {
                                onchangeError(e)
                            }}
                            className={cx('img')} 
                        />
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
                            notify()
                        }}
                    />
                    <ToastContainer />
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
    to: PropTypes.string,
    border: PropTypes.bool,
    item: PropTypes.bool, 
    columnFour: PropTypes.bool,
    img: PropTypes.string,
    name: PropTypes.string, 
    dsc: PropTypes.string, 
    country: PropTypes.string, 
    price: PropTypes.number, 
    rate: PropTypes.number, 
}

export default Product