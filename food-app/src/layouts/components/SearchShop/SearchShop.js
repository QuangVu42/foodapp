import { useState } from 'react'
import classNames from 'classnames/bind'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAngleDown, faGripVertical, faGripHorizontal } from '@fortawesome/free-solid-svg-icons'

import Button from '../../../Components/Button/Button'
import Styles from './SearchShop.module.scss'

const cx = classNames.bind(Styles)

function SearchShop(){

    const [iconActive1, setIconActive1] = useState(true)
    const [iconActive2, setIconActive2] = useState(false)
    return (
        <div className={cx('wrapper')}>
            <Box sx={{flexGrow:2}} className={cx('box')}>
               <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <section className={cx('input')}>
                            <input type='search' placeholder='Search your products' />
                            <div className={cx('serach-icon')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass}  className={cx('icon')} />
                            </div>
                        </section>
                    </Grid>
                   <Grid item xs={2}>
                        <section className={cx('btn')}>
                            <Button
                                small
                                children={'featured'} 
                                element = {<FontAwesomeIcon icon={faAngleDown} />}
                            />
                        </section>
                   </Grid>
                    <Grid item xs={1}>
                        <section className={cx('icon-types')}>
                            <div className={iconActive1 ? cx('icon1','active'): cx('icon1')}
                                onClick= {()=> {
                                    setIconActive1(true) 
                                    setIconActive2(false)
                                }}
                            >
                                <FontAwesomeIcon icon={faGripVertical} className={cx('icon')} />
                                <FontAwesomeIcon icon={faGripVertical} className={cx('icon')} />
                            </div>
                            <FontAwesomeIcon icon={faGripHorizontal} 
                                className={iconActive2 ? cx('icon2','active'): cx('icon2')} 
                                onClick= {()=> {
                                    setIconActive1(false) 
                                    setIconActive2(true)
                                }}
                            />
                        </section>
                    </Grid>
               </Grid>
            </Box>
        </div>
    )
}

export default SearchShop