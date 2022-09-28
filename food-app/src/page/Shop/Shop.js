import React, {useEffect, useState, lazy} from 'react'
import classNames from 'classnames/bind'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Styles from './Shop.module.scss'
import productApi from '../../apis/productApis'

// modules
const BannerShop = lazy(()=> import("../../layouts/components/BannerShop/BannerShop"))
const Slidebar = lazy(()=> import('../../layouts/components/Slidebar/Slidebar'))
const SearchShop = lazy(()=> import('../../layouts/components/SearchShop/SearchShop'))
const ProductShop = lazy(()=> import('../../layouts/components/ProductShop/ProductShop'))

const cx = classNames.bind(Styles)

function Shop () {

    // Product
    // const [burgers, setBurger] = useState([])
    // const [breads, setBreads] = useState([])
    // const [sandwiches, setSandwiches] = useState([])
    // const [drinks, setDrinks] = useState([])
    // const [pizzas, setPizzas] = useState([])
    const [products,setProducts] = useState([])

    const [filters, setFilters] = useState('burgers')
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        const fetchApi = async () =>{
             setLoading(true)

             const result = await productApi(filters)
             setProducts(result)

             setLoading(false)
        }
        fetchApi()
    },[filters])
    return(
        <div className={cx('wrapper')}>
            <BannerShop />
            <div id='container'>
                <Box sx={{flexGrow:2}}>
                    <div className={cx('shop-content')}>
                        <Grid container spacing={0}>
                            <Grid item xs={2}>
                                <Slidebar changeFilters={ filters => setFilters(filters)} />
                            </Grid>
                            <Grid item xs={10}>
                                <div className={cx('shop-product')}>
                                    <section className={cx('search')}>
                                        <SearchShop />
                                    </section>
                                    <section className={cx('product')}>
                                        <ProductShop props={products} />
                                    </section>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default Shop
