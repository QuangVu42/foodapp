import React, {useEffect, useState, lazy} from 'react'
import classNames from 'classnames/bind'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Styles from './Shop.module.scss'
import productApi from '../../apis/ProductApis'
import LoadingProduct from '../../Loading/LoadingProduct/LoadingProduct'

// modules
const BannerShop = lazy(()=> import("../../layouts/components/BannerShop/BannerShop"))
const Slidebar = lazy(()=> import('../../layouts/components/Slidebar/Slidebar'))
const SearchShop = lazy(()=> import('../../layouts/components/SearchShop/SearchShop'))
const ProductShop = lazy(()=> import('../../layouts/components/ProductShop/ProductShop'))

const cx = classNames.bind(Styles)

function Shop () {

    // Product
    const [products,setProducts] = useState([])

    const [filters, setFilters] = useState('burgers')
    const [loading , setLoading] = useState(true)
    const [rateNumber, setRateNumber] = useState(0)
    const [loadingRate, setLoadingRate] = useState(true)
    const [priceId, SetPriceId] = useState(0)

    // set layout
    const [layout, setLayout] = useState(false)

    // input Value
    const [inputValue, setInputValue] = useState([])
    const [productInputValue, setProductInputValue] = useState([])

    // handle product
    const [productUp, setProductUp] = useState([])
    
    // call Api
    useEffect(()=>{
        const fetchApi = async () =>{
            setLoading(true)
            
            const result = await productApi(filters) || []
            setProducts(result)
            
            setLoading(false)
        }
        fetchApi()
    },[filters])
    
    // handle productUP
    useEffect(() =>{
        if(rateNumber && !priceId){
            setLoadingRate(false)

            setProductUp(products.filter(product=> (rateNumber === product.rate)))
            
            setLoadingRate(true)
        }else if(!rateNumber && priceId){
            switch(priceId){
                case 1:
                    setProductUp(products.filter((product)=>(product.price <= 1000)))  
                    break;
                case 2:
                    setProductUp(products.filter((product)=>(product.price >50 && product.price <100))) 
                    break;
                case 3:
                    setProductUp(products.filter((product)=>(product.price <= 50)))
                    break;
                case 4: 
                    setProductUp(products.filter((product)=>(product.price > 100)))
                    break;
                default:
                    setProductUp(products)
                    break;
            }
        }else if(priceId && rateNumber){
            setLoadingRate(true)
            switch(priceId){
                case 1:
                    setProductUp(products.filter((product)=>(product.price <= 1000 && rateNumber === product.rate)))  
                    break;
                case 2:
                    setProductUp(products.filter((product)=>(product.price >50 && product.price <100 && rateNumber === product.rate))) 
                    break;
                case 3:
                    setProductUp(products.filter((product)=>(product.price <= 50 && rateNumber === product.rate)))
                    break;
                case 4: 
                    setProductUp(products.filter((product)=>(product.price > 100 && rateNumber === product.rate)))
                    break;
                default:
                    setProductUp(products)
                    break;
            }
            setLoadingRate(false)
        }
    },[rateNumber,priceId])
    
    // hanlde product 
    const onchangeUpdata = () =>{
        if(rateNumber && !priceId){
            return productUp
        }else if(priceId && !rateNumber){
            return productUp
        }else if(priceId && rateNumber){
            return productUp
        }else{
            return products
        }
    }

    //hanlde input value
    useEffect(()=>{
        setTimeout(()=>{
            for(const element of products){
                setProductInputValue(products.filter(
                    product => product.name.toLowerCase().includes(inputValue.toLowerCase()
                )))
            }
        })
    },[inputValue])
    // un show search
    const [ unShowSearch, setUnShowSearch] = useState(true)
    useEffect(() =>{
        setUnShowSearch(true)
    },[inputValue])
    return(
        <div className={cx('wrapper')} onClick={()=>{
           setUnShowSearch(false)
        }}>
            <BannerShop />
            <div id='container'>
                <Box sx={{flexGrow:2}}>
                    <div className={cx('shop-content')}>
                        <Grid container spacing={0}>
                            <Grid item xs={0} sm={0}  md={3}>
                                <Slidebar 
                                    changeFilters={ filters => setFilters(filters)}
                                    changeRateNumber = {rateNumber => setRateNumber(rateNumber)}
                                    changePriceId = { priceId => SetPriceId(priceId)} 
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={9}>
                                <div className={cx('shop-product')}>
                                    <section className={cx('search')}>
                                        <SearchShop
                                            changeInputValue = { inputValue => setInputValue(inputValue)}
                                            changeLayout = {layout => setLayout(layout)}
                                            props={productInputValue}
                                            value = {inputValue}
                                            unShowSearch = {unShowSearch}
                                        />
                                    </section>
                                    <section className={cx('product')}>
                                        <div style={
                                            (loading) ? {display:'block'} : {display: 'none'}
                                            }
                                        >
                                            <LoadingProduct />
                                        </div>
                                        <span style={ !loading ? {display: 'block'}: {display:'none'}}>
                                            <ProductShop props={onchangeUpdata()} layout={layout} />
                                        </span>
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