import classNames from 'classnames/bind'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Styles from './Footer.module.scss'

const cx = classNames.bind(Styles)

function Footer(){
    return(
        <div classNames={cx('warpper')}>
            <div id='container'>
                <Box sx={{flexGrow:2}}>
                    <Grid container spacing={2}>    
                        <Grid item xs={4}>  
                            <section className={cx('calendar')}>
                                <Grid item xs={4}>
                                    <span>sunday</span>
                                    <span>monday</span>
                                    <span>tuesday</span>
                                    <span>wednesday</span>
                                    <span>thursday</span>
                                    <span>friday</span>
                                </Grid>
                                <Grid item xs={4}>
                                    <span>---</span>
                                    <span>---</span>
                                    <span>---</span>
                                    <span>---</span>
                                    <span>---</span>
                                    <span>---</span>
                                    <span>---</span>
                                    <span>---</span>
                                </Grid>
                                <Grid item xs={4}>
                                    <span>closed</span>
                                    <span>8.00-20.00</span>
                                    <span>8.00-20.00</span>
                                    <span>8.00-20.00</span>
                                    <span>8.00-20.00</span>
                                    <span>8.00-20.00</span>
                                    <span>8.00-20.00</span>
                                </Grid>
                            </section>
                        </Grid>
                        <Grid item xs={4}>
                            <section className={cx('address')}></section>
                        </Grid>
                        <Grid item xs={4}>
                            <section className={cx('map')}></section>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Footer