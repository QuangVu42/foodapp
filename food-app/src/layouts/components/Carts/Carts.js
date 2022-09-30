import React, {useState, useEffect} from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus,faCreditCard } from '@fortawesome/free-solid-svg-icons'
import Box from '@mui/material/box'
import Grid from '@mui/material/grid'

import Styles from './Carts.module.scss'
import Product from '../../../Components/Product/Product'
import Button from '../../../Components/Button/Button'

const cx = classNames.bind(Styles)

function Carts() {
    const products = [
      {
        "id": "15259-german-chocolate-killer-brownie-tin-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132029/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Killer Brownie®",
        "dsc": "German Chocolate Killer Brownie®",
        "price": 39.99,
        "rate": 4,
        "country": "Dayton, OH"
      },
      {
        "id": "world-famous-banana-pudding-party-sized",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84893/world-famous-banana-pudding-bowl-64-oz.85af650f8f51512f8f3181a11d6587d6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Magnolia Bakery",
        "dsc": "World Famous Banana Pudding Bowl (64 oz.)",
        "price": 56,
        "rate": 4,
        "country": "New York, NY"
      },
      {
        "id": "jacques-world-famous-chocolate-chip-cookies",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81172/jacques-world-famous-chocolate-chip-cookies-6-pack.2217a14c443602493bba88aa9335319a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Jacques Torres Chocolate",
        "dsc": "Jacques’ World Famous Chocolate Chip Cookies - 6 Pack",
        "price": 39.95,
        "rate": 4,
        "country": "New York, NY"
      },
      {
        "id": "luigis-original-cannoli-pie",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132206/original-cannoli-pie.4cb5b9ba82f57b69b90765fd9f07aa1a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "The Cannoli Pie Company",
        "dsc": "Original Cannoli Pie",
        "price": 69,
        "rate": 4,
        "country": "Bridgeport, CT"
      },
      {
        "id": "sea-salted-caramel-swirl-cheesecake",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134006/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Cotton Blues Cheesecake Company",
        "dsc": "Sea-Salted Caramel Swirl Cheesecake",
        "price": 65,
        "rate": 4,
        "country": "Hattiesburg, MS"
      },
        {
            "id": "15259-german-chocolate-killer-brownie-tin-pack",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132029/german-chocolate-killer-brownie-tin-pack.5ebc34160f28767a9d94c4da2e04c4b9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Killer Brownie®",
            "dsc": "German Chocolate Killer Brownie®",
            "price": 39.99,
            "rate": 4,
            "country": "Dayton, OH"
          },
          {
            "id": "world-famous-banana-pudding-party-sized",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84893/world-famous-banana-pudding-bowl-64-oz.85af650f8f51512f8f3181a11d6587d6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Magnolia Bakery",
            "dsc": "World Famous Banana Pudding Bowl (64 oz.)",
            "price": 56,
            "rate": 4,
            "country": "New York, NY"
          },
          {
            "id": "jacques-world-famous-chocolate-chip-cookies",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/81172/jacques-world-famous-chocolate-chip-cookies-6-pack.2217a14c443602493bba88aa9335319a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Jacques Torres Chocolate",
            "dsc": "Jacques’ World Famous Chocolate Chip Cookies - 6 Pack",
            "price": 39.95,
            "rate": 4,
            "country": "New York, NY"
          },
          {
            "id": "luigis-original-cannoli-pie",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132206/original-cannoli-pie.4cb5b9ba82f57b69b90765fd9f07aa1a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "The Cannoli Pie Company",
            "dsc": "Original Cannoli Pie",
            "price": 69,
            "rate": 4,
            "country": "Bridgeport, CT"
          },
          {
            "id": "sea-salted-caramel-swirl-cheesecake",
            "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134006/sea-salted-caramel-swirl-cheesecake.e2825335433fb7a272a5d77649a6849e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
            "name": "Cotton Blues Cheesecake Company",
            "dsc": "Sea-Salted Caramel Swirl Cheesecake",
            "price": 65,
            "rate": 4,
            "country": "Hattiesburg, MS"
          }
    ]

    // set number cart
    const [number, setNumber] = useState(0)
    return(
        <div className={cx('wrapper')}>
            <div id='container'>
              <h1>cart</h1> 
              <Box sx={{flexGrow:2}} className={cx('box')}>
                  {products.map((product,index)=>(
                    <Grid container className={cx('content')} key={index}>
                        <Grid item xs={5} className={cx('content-product')}>
                          <Product
                              item
                              img={product.img}
                              name={product.name}
                              dsc= {product.dsc}
                              country={product.country}
                              price={product.price}
                              rate={product.rate}
                              border={false}
                              to={'/detail'}
                          />
                        </Grid>
                        <Grid item xs={0.5} className={cx('content-total')}>
                          4
                        </Grid>
                        <Grid item xs={0.5} className={cx('content-price')}>
                          <p>$99</p>
                        </Grid>
                        <Grid item xs={2} className={cx('content-count')}>
                          <div className={cx('count')}>
                            <button type="button" className={cx('btn')}
                              onClick={()=>{
                                if(number>0){
                                  setNumber(number-1)
                                }else{
                                  setNumber(0)
                                }
                              }}
                            >
                              <span><FontAwesomeIcon icon={faMinus}  className={cx('icon')} /></span>
                            </button>
                            <span className={cx('number')}>{number}</span>
                            <button type="button" className={cx('btn')}
                              onClick={()=>{
                                if(number<10){
                                  setNumber(number+1)
                                }else{
                                  setNumber(20)
                                }
                              }}
                            >
                              <span><FontAwesomeIcon icon={faPlus} className={cx('icon')} /></span>
                            </button>
                          </div>
                        </Grid>
                        <Grid item xs={2} className={cx('content-pay')}>
                          <Button 
                            primary
                            href='#'
                            children={'pay add'}
                            icon = {<FontAwesomeIcon icon={faCreditCard} className={cx('icon')} />}
                          />
                        </Grid>
                        <Grid item xs={2} className={cx('content-pay')}>
                          <Button 
                            primary
                            href='#'
                            children={'delete'}
                            icon = {<FontAwesomeIcon icon={faCreditCard} className={cx('icon')} />}
                          />
                        </Grid>
                    </Grid>
                  ))}
              </Box>
              <div className={cx('total')}>
                <p>total: <span>$ 1009</span></p>
                <Button 
                  primary
                  href='#'
                  children={'pay add'}
                  icon = {<FontAwesomeIcon icon={faCreditCard} className={cx('icon')} />}
              />
              </div>
            </div>
        </div>
    )
}

export default Carts