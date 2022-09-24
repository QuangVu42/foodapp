import React from 'react'
import classNames from 'classnames/bind'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import BannerShop from "../../layouts/components/BannerShop/BannerShop"
import Slidebar from '../../layouts/components/Slidebar/Slidebar'
import SearchShop from '../../layouts/components/SearchShop/SearchShop'
import ProductShop from '../../layouts/components/ProductShop/ProductShop'
import Styles from './Shop.module.scss'

const cx = classNames.bind(Styles)

function Shop () {
    return(
        <div className={cx('wrapper')}>
            <BannerShop />
            <div id='container'>
                <Box sx={{flexGrow:2}}>
                    <div className={cx('shop-content')}>
                        <Grid container spacing={0}>
                            <Grid item xs={2}>
                                <Slidebar />
                            </Grid>
                            <Grid item xs={10}>
                                <div className={cx('shop-product')}>
                                    <section className={cx('search')}>
                                        <SearchShop />
                                    </section>
                                    <section className={cx('product')}>
                                        <ProductShop />
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
