import React, {useEffect, useState} from 'react'
import classNames from 'classnames/bind'
import Box from '@mui/material/box'
import Grid from '@mui/material/grid'
import ReactPaginate from 'react-paginate';
import {Fragment} from 'react';

import Product from '../../../Components/Product/Product';
import Styles from './Product.module.scss'
import productApi from '../../../apis/productApis'
import Pagination from '../../../Components/Pagination/Pagination'

const cx = classNames.bind(Styles)

function ProductShop(){

     // Product
     const [burgers, setBurger] = useState([])
     // const [breads, setBreads] = useState([])
     // const [sandwiches, setSandwiches] = useState([])
     // const [drinks, setDrinks] = useState([])
     // const [pizzas, setPizzas] = useState([])

     const [filters, setFilters] = useState({})
     const [loading , setLoading] = useState(true)
     const [currentPage, setCurrentPage] = useState(1)
     const [postsPerPage] = useState(16)

     useEffect(()=>{
          const fetchApi = async () =>{
               setLoading(true)

               const result = await productApi('burgers')
               setBurger(result)

               setLoading(false)
          }
          fetchApi()
      },[filters])

     const products = burgers

     // so data luong hien thi tren 1 page
     const indexOfLastPost = currentPage * postsPerPage
     const indexOfFirstPost = indexOfLastPost - postsPerPage
     const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost) 

     // change page
     const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return(
     <div className={cx('wrapper')}>
          <div className={cx('product')}>
               <Box sx={{flexGrow:2}} className={cx('box')}>
                    <Grid container spacing={3} >
                    {currentPosts.map((product,index) =>(
                         <Grid item xs={3} key={index}>
                              <Product
                                   columnFour 
                                   img={product.img}
                                   title={product.name}
                                   content= {product.dsc}
                                   address={product.country}
                                   price={product.price}
                                   number={product.rate}
                              />
                    </Grid>
                    ))}
                    </Grid>
               </Box>
               <Pagination postsPerPage={postsPerPage} totalPosts={products.length}  paginate={paginate}/>
          </div>
     </div>
    )
}


export default ProductShop