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
  
   // total product
   const [totalProduct, setTotalProduct] = useState(0)

   // set number cart
   const [number, setNumber] = useState(1)
 
   // set total price
   const [totalPrice, setTotalPrice] = useState(0)

  // set, get, remove data localStorag
  const [products, setProducts] = useState([])
  const [onclickDeleteAdd, setOnclickDeleteAdd] = useState(false)

 // set, get, remove data localStorag
  useEffect(() =>{
    if(onclickDeleteAdd){
      localStorage.removeItem('cart','')
      localStorage.removeItem('count',0)
      setProducts([])
      setOnclickDeleteAdd(false)
      document.getElementById('count-length').textContent = 0
    }else{
      setProducts(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [])
    }
  },[onclickDeleteAdd])

  // set total price
  useEffect(() =>{
    var sum = 0
    for(const element of products){
      sum += element.price * element.count
    }
    setTotalPrice(sum)
  },[products])


    return(
        <div className={cx('wrapper')}>
            <div id='container'>
              <h1>cart</h1> 
              <Box sx={{flexGrow:2}} className={cx('box')}>
                  {products.map((product,index)=>(
                    <Grid container className={cx('content')} key={index}>
                        <Grid item xs={12} sm={6} className={cx('content-product')}>
                          <Product
                              item
                              img={product.img}
                              name={product.name}
                              dsc= {product.dsc}
                              country={product.conuntry}
                              price={product.price}
                              rate={product.rate}
                              border={false}
                              to={'/detail'}
                          />
                        </Grid>
                        <Grid item xs={2} sm={1} className={cx('content-total')}>
                          {product.count}
                        </Grid>
                        <Grid item xs={2} sm={1} className={cx('content-price')}>
                          <p>${product.price*product.count}</p>
                        </Grid>
                        <Grid item xs={3} sm={2} className={cx('content-pay')}>
                          <Button 
                              id="cart"
                            primary
                            children={'pay'}
                            icon = {<FontAwesomeIcon icon={faCreditCard} className={cx('icon')} />}
                          />
                        </Grid>
                        <Grid item xs={3} sm={2} className={cx('content-pay')}>
                          <Button
                            id="cart"
                            primary
                            children={'delete'}
                            icon = {<FontAwesomeIcon icon={faCreditCard} className={cx('icon')} />}
                          />
                        </Grid>
                    </Grid>
                  ))}
              </Box>
              <div className={cx('total')}>
                <p>total: <span>${totalPrice}</span></p>
                <Button
                  id='cart'
                  primary
                  children={'pay add'}
                  icon = {<FontAwesomeIcon icon={faCreditCard} className={cx('icon')} />}
                />
                <Button 
                  id='cart'            
                  primary
                  children={'delete add'}
                  icon = {<FontAwesomeIcon icon={faCreditCard} className={cx('icon')} />}
                  onClick ={() =>
                    setOnclickDeleteAdd(true)
                  }
                />
              </div>
            </div>
        </div>
    )
}

export default Carts