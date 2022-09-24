import classNames from 'classnames/bind'
import Box from '@mui/material/box';
import Grid from '@mui/material/grid';

import Product from '../../../Components/Product/Product';
import img from '../../../assets/demo/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.avif'
import Styles from './Product.module.scss'

const cx = classNames.bind(Styles)

function ProductShop(){
    return(
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
               <Box sx={{flexGrow:2}} className={cx('box')}>
                    <Grid container spacing={3}>
                       <Grid item xs={3}>
                            <Product
                                columnFour 
                                img={img}
                                title="gramercy tavern"
                                content= "the gramercy tavern burger-4 pack"
                                address="new york,ny"
                                price="99"
                                number={5}
                            />
                       </Grid>
                       <Grid item xs={3}>
                            <Product
                                columnFour 
                                img={img}
                                title="gramercy tavern"
                                content= "the gramercy tavern burger-4 pack"
                                address="new york,ny"
                                price="99"
                                number={5}
                            />
                       </Grid>
                       <Grid item xs={3}>
                            <Product
                                columnFour 
                                img={img}
                                title="gramercy tavern"
                                content= "the gramercy tavern burger-4 pack"
                                address="new york,ny"
                                price="99"
                                number={5}
                            />
                       </Grid>
                       <Grid item xs={3}>
                            <Product
                                columnFour 
                                img={img}
                                title="gramercy tavern"
                                content= "the gramercy tavern burger-4 pack"
                                address="new york,ny"
                                price="99"
                                number={5}
                            />
                       </Grid>
                    </Grid>
               </Box>
               <Box sx={{flexGrow:2}} className={cx('box')}>
                    <Grid container spacing={3}>
                       <Grid item xs={3}>
                            <Product
                                columnFour 
                                img={img}
                                title="gramercy tavern"
                                content= "the gramercy tavern burger-4 pack"
                                address="new york,ny"
                                price="99"
                                number={5}
                            />
                       </Grid>
                       <Grid item xs={3}>
                            <Product
                                columnFour 
                                img={img}
                                title="gramercy tavern"
                                content= "the gramercy tavern burger-4 pack"
                                address="new york,ny"
                                price="99"
                                number={5}
                            />
                       </Grid>
                       <Grid item xs={3}>
                            <Product
                                columnFour 
                                img={img}
                                title="gramercy tavern"
                                content= "the gramercy tavern burger-4 pack"
                                address="new york,ny"
                                price="99"
                                number={5}
                            />
                       </Grid>
                       <Grid item xs={3}>
                            <Product
                                columnFour 
                                img={img}
                                title="gramercy tavern"
                                content= "the gramercy tavern burger-4 pack"
                                address="new york,ny"
                                price="99"
                                number={5}
                            />
                       </Grid>
                    </Grid>
               </Box>
            </div>  
        </div>
    )
}

export default ProductShop