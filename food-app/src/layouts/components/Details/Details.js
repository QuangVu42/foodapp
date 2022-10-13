import React,{useState, useEffect} from 'react'
import classNames from 'classnames/bind'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCartShopping, faMinus, faTruck , faPlus, faStar as Starfullcolor, faTag} from '@fortawesome/free-solid-svg-icons'
import { faHeart, faStar as Starcolorborder} from '@fortawesome/free-regular-svg-icons'
import { useLocation } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify';
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Styles from './Details.module.scss'
import Button from '../../../Components/Button/Button'

const cx = classNames.bind(Styles)

function Details() {

    // route data
    const location = useLocation()
    const { img, name, dsc, country, price, rate } = location.state

    // set number product
    const [number, setNumber] = useState(1)
    const [totalPrice, setTotalPrice] = useState(price)

    // state product location
    const state = []
    state.push(img, name, dsc, country, price, rate)

    useEffect(() =>{
        setTotalPrice(price*number)
    },[number])

    // lay data tu localStorage
    const [countNew,setConutNew] = useState(0)
    const data = JSON.parse(localStorage.getItem('cart')) || []
    const count = JSON.parse(localStorage.getItem('count')) || 0

    // add data cart in localStorage
    const onchangeUpDataLocal = () =>{
        var a = data.some((e)=>{
            return e.name === name
        })
        if(typeof(data) === 'object'){
            if(a){
                data.forEach((e)=>{
                    if(e.name === name){
                        e.count = number
                    }
                })
            }else{
                data.push({img, name, dsc, country, price, rate, count: number >1 ? number :1 })
                localStorage.setItem('count',JSON.stringify(count+1))
            }
        }else{
            data.push({img, name, dsc, country, price, rate, count: number >1 ? number :1 })
            localStorage.setItem('count',JSON.stringify(count+1))
        }
        localStorage.setItem('cart',JSON.stringify(data))
    }
    // show count in header
    useEffect(() =>{
        document.getElementById('count-length').textContent = localStorage.getItem('count')
    },[countNew])
    // messages in cart
    const notify = () => toast.success('Product added to cart!',{
        position: "bottom-right",
        autoClose: 1500,
        className:cx('toast-messages')
    })
    return(
        <div className={cx('wrapper')}>
            <section className={cx('carts')}>
               <div id="container-header">
                    <Box sx={{flexGrow:2}} className={cx('box')}>
                        <Grid container spacing={3}>
                            <Grid item xs={6} className={cx('image')}>
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: "Error" ,
                                        isFluidWidth: true,
                                        src: img
                                    },
                                    largeImage: {
                                        src: img,
                                        width: 1200,
                                        height: 1800
                                    }
                                }} />
                                <div className={cx('image-change')}>
                                    <div className={cx('img')}>
                                        <img src={img} alt="Error" />
                                    </div>
                                    <div className={cx('img')}>
                                        <img src={img} alt="Error" />
                                    </div>
                                    <div className={cx('img')}>
                                        <img src={img} alt="Error" />
                                    </div> 
                                    <div className={cx('img')}>
                                        <img src={img} alt="Error" />
                                    </div> 
                                </div>
                            </Grid>
                            <Grid item xs={6} className={cx('content')}>
                                <h1 className={cx('title')}>{name}</h1>
                                <span>
                                    {[...Array(rate)].map((e,index)=>(<FontAwesomeIcon icon={Starfullcolor} className={cx('vote')} key ={index} />))}
                                    {[...Array(5-rate)].map((e,index)=>(<FontAwesomeIcon icon={Starcolorborder} className={cx('noVote')} key ={index} />))}
                                </span>
                                <div className={cx('price')}>${totalPrice}</div>
                                <div className={cx('content-infor')}>
                                    <p><span>category:</span> best food</p>
                                    <p><span>county:</span> {country}</p>
                                </div>
                                <p>{dsc}</p>
                                <div className={cx('content-add')}>
                                    <div className={cx('content-btn')}>
                                        <button 
                                            type="button" 
                                            className={cx('btn')}
                                            onClick={()=>{
                                                if(number>1){
                                                    setNumber(number-1)
                                                }else{
                                                    setNumber(1)
                                                }
                                            }}
                                        >
                                            <span><FontAwesomeIcon icon={faMinus}  className={cx('icon')} /></span>
                                        </button>
                                        <span className={cx('number')}>{number}</span>
                                        <button 
                                            type="button" 
                                            className={cx('btn')}
                                            onClick={()=>{
                                                if(number<20){
                                                    setNumber(number+1)
                                                }else{
                                                    setNumber(20)
                                                }
                                            }}
                                        >
                                            <span><FontAwesomeIcon icon={faPlus} className={cx('icon')} /></span>
                                        </button>
                                    </div>
                                    <div className={cx('btn')}>
                                        <Button 
                                            state={ state }
                                            primary
                                            children={'add to cart'}
                                            icon = {<FontAwesomeIcon icon={faCartShopping} className={cx('icon')} 
                                            />}
                                            onClick = {
                                                () => {
                                                    setConutNew(1)
                                                    onchangeUpDataLocal()
                                                    notify()
                                                }
                                            }
                                        />
                                    </div>
                                    <ToastContainer />
                                </div>
                                <ul className={cx('content-redow')}>
                                    <li>
                                        <FontAwesomeIcon icon={faTruck} className={cx('icon')} />
                                        <p>free global shipping on all orders</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCalendar}  className={cx('icon')} />
                                        <p>2 hours easy return if you change your mind</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faTag} className={cx('icon')} />
                                        <p>order before noon for same day dispatch</p>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Box>
               </div>
            </section>
        </div>
    )
}

export default Details