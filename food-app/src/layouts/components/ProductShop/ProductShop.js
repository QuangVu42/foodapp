import React, {useEffect, useState} from 'react'
import classNames from 'classnames/bind'
import Box from '@mui/material/box'
import Grid from '@mui/material/grid'
import LazyLoad from 'react-lazyload'

import Product from '../../../Components/Product/Product';
import Styles from './Product.module.scss'
import Pagination from '../../../Components/Pagination/Pagination'

const cx = classNames.bind(Styles)

function ProductShop({props}){
     const products = props

     const [currentPage, setCurrentPage] = useState(1)
     const [postsPerPage] = useState(16)

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
                             <LazyLoad>
                                   <Product
                                        columnFour 
                                        img={product.img}
                                        name={product.name}
                                        dsc= {product.dsc}
                                        country={product.country}
                                        price={product.price}
                                        rate={product.rate}
                                        to={'/cart'}
                                   />
                             </LazyLoad>
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