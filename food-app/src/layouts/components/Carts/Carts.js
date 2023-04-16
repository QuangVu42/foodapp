import React, {useState, useEffect} from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Styles from './Carts.module.scss'
import Product from '../../../Components/Product/Product'
import Button from '../../../Components/Button/Button'

const cx = classNames.bind(Styles)

function Carts() {
   // set total price
   const [totalPrice, setTotalPrice] = useState(0)
  
  // set count in localStorage
  const count = JSON.parse(localStorage.getItem('count')) || 0
  const [dataNew, setDataNew] = useState(0)

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
  // delete one product
  var onchangeDeleteProduct= (product)=>{
    var a = products.filter((e)=>{
      return e.name !== product.name
    })
    localStorage.setItem('cart',JSON.stringify(a))
    localStorage.setItem('count',JSON.stringify(count-1))
  }
  // render a list of products
  useEffect(() =>{
    setProducts(JSON.parse(localStorage.getItem('cart')) || [])
  },[dataNew])
  // show count in header
  useEffect(() =>{
    document.getElementById('count-length').textContent = localStorage.getItem('count')
  },[dataNew])
  
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
                            onClick= {
                              ()=> {
                                setDataNew(dataNew+1)
                                onchangeDeleteProduct(product)
                              }
                            }
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