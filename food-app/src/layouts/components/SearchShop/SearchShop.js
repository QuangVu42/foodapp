import { useEffect, useState } from 'react'
import  PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAngleDown, faGripVertical, faGripHorizontal } from '@fortawesome/free-solid-svg-icons'

import Button from '../../../Components/Button/Button'
import Styles from './SearchShop.module.scss'
import Product from '../../../Components/Product/Product'

const cx = classNames.bind(Styles)

function SearchShop(props){
    const products = props.props
    const inputValue = props.value

    const [active, setActive] = useState(true)
    // un show active search
    const [unShow, setUnShow] = useState(true)
    useEffect(() =>{
        setUnShow(true)
    },[inputValue])

    props.changeLayout(active)
    // set show search
    useEffect(() =>{
        setUnShow(props.unShowSearch)
    })
    return (
        <div className={cx('wrapper')}>
            <Box sx={{flexGrow:2}} className={cx('box')}>
               <Grid container spacing={2}>
                    <Grid item xs={12} lg={8}>
                        <section className={cx('input')}>
                            <input type='search' placeholder='Search your products' 
                                onChange={(e)=> props.changeInputValue(e.target.value.toString())}
                            />
                            <div className={cx('serach-icon')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass}  className={cx('icon')} />
                            </div>
                            <div className={
                                inputValue.length >0  && products.length > 0  && unShow? cx('product','active') : inputValue.length > 0 && products.length <= 0  && unShow ? cx('product','active_background','active') : cx('product')
                                }
                            > 
                                {products.map((product,index)=>(
                                    <div key={index}>
                                        <Product
                                            item
                                            img={product.img}
                                            name={product.name}
                                            dsc= {product.dsc}
                                            country={product.country}
                                            price={product.price}
                                            rate={product.rate}
                                            border={true}
                                            to={'/detail'}
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </Grid>
                   <Grid item xs={0} lg={2} className={cx('btn')}>
                        <section className={cx('btn')}>
                            <Button
                                small
                                children={'featured'} 
                                element = {<FontAwesomeIcon icon={faAngleDown} />}
                            />
                        </section>
                   </Grid>
                    <Grid item xs={0} lg={2}>
                        <section className={cx('icon-types')}>
                            <div className={active ? cx('icon1','active'): cx('icon1')}
                                onClick= {()=> {
                                    setActive(true);
                                }}
                                >
                                <FontAwesomeIcon icon={faGripVertical} className={cx('icon')} />
                                <FontAwesomeIcon icon={faGripVertical} className={cx('icon')} />
                            </div>
                            <FontAwesomeIcon icon={faGripHorizontal} 
                                className={!active ? cx('icon2','active'): cx('icon2')} 
                                onClick= {()=> {
                                    setActive(false)
                                }}
                            />
                        </section>
                    </Grid>
               </Grid>
            </Box>
        </div>
    )
}
SearchShop.propTypes = {
    props: PropTypes.array,
}

export default SearchShop