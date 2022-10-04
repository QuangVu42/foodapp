import React, {useEffect, useState} from 'react'
import  PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Box from '@mui/material/box'
import Grid from '@mui/material/grid'
import LazyLoad from 'react-lazyload'

import Product from '../../../Components/Product/Product';
import Styles from './Product.module.scss'
import Pagination from '../../../Components/Pagination/Pagination'

const cx = classNames.bind(Styles)

function ProductShop({props,layout}){
     
     // get data
     const products = props

     // chia pagination
     const [currentPage, setCurrentPage] = useState(1)
     const [postsPerPage,setPostsPerPage] = useState(16)

     // so data luong hien thi tren 1 page
     const indexOfLastPost = currentPage * postsPerPage
     const indexOfFirstPost = indexOfLastPost - postsPerPage
     const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost) 

     // change page
     const paginate = (pageNumber) => setCurrentPage(pageNumber)
     
     // set postsPerPage
     useEffect(() =>{
          if(layout){
               setPostsPerPage(24)
          }else{
              setPostsPerPage(15)
          }
     },[layout])

    return(
     <div className={cx('wrapper')}>
          <div className={cx('product')}>
               <Box sx={{flexGrow:2}} className={cx('box')}>
                    <Grid container >
                    {currentPosts.map((product,index) =>(
                         <Grid item xs={layout ? 3 : 4 } key={index} className={layout ? cx('three') : cx('four')} >
                              <LazyLoad>
                                   <Product
                                        columnFour 
                                        img={product.img}
                                        name={product.name}
                                        dsc= {product.dsc}
                                        country={product.country}
                                        price={product.price}
                                        rate={product.rate}
                                        to={'/detail'}
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
ProductShop.propTypes = {
     props: PropTypes.array.isRequired,
     layout: PropTypes.bool.isRequired
}
export default ProductShop