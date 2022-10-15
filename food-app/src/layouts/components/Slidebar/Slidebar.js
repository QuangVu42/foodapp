import React, {useEffect, useState} from 'react'
import  PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faX,faStar as Starfullcolor} from '@fortawesome/free-solid-svg-icons'
import { faStar as Starcolorborder} from '@fortawesome/free-regular-svg-icons'

import Burgers from '../../../assets/svgs/burger.e4646d9c.svg'
import Breads from '../../../assets/svgs/bread.3829698f.svg'
import Sandwiches from '../../../assets/svgs/sandwich.2e9ee917.svg'
import Drinks from '../../../assets/svgs/drinks.03dd034b.svg'
import Pizzas from '../../../assets/svgs/pizza.42d0ea1b.svg'
import Style from './Slidebar.module.scss'

const cx = classNames.bind(Style)

function Slidebar(props){

    const Icons = [
        {
            id: 1,
            icon: Burgers,
            content: 'Burgers'
        },
        {
            id: 2,
            icon: Breads,
            content: 'Breads'
        },
        {
            id: 3,
            icon: Sandwiches,
            content: 'Sandwiches'
        },
        {
            id: 4,
            icon: Drinks,
            content: 'Drinks'
        },
        {
            id: 5,
            icon: Pizzas,
            content: 'Pizzas'
        }
    ]

    const Prices = [
        {
            id:1,
            price: 'under $1000',
            type: 'radio'
        },
        {
            id:2,
            price: '$50 to $100',
            type: 'radio'
        },
        {
            id:3,
            price: 'Under $50',
            type: 'radio'
        },
        {
            id:4,
            price: 'above $100',
            type: 'radio'
        }
    ]

    const Rates =[
        {
            id: 1,
            number:5,
            content: '&up'
        },
        {
            id:2,
            number:4,
            content:'&up'
        },
        {
            id:3,
            number: 3,
            content:'&up'
        }
    ]

    const [icons, setIcons] = useState('Burgers')
    const [pricesup, setPriceup]= useState(false)
    const [pricesId, setPriceId] = useState(0) 
    const [rateup, setRateup] = useState(0)
    const [checked, setChecked] = useState(false)
    const [showSlidebar,setShowSlidebar] = useState(false)

    // set show icon menuSlidebar 
    const [iconShowMenu, setIconShowMenu] = useState(false)
    useEffect(()=>{
        const IconShowMenu = () =>{
            if(window.scrollY>=224 && window.scrollY<=3500){
                setIconShowMenu(true)
            }else{
                setIconShowMenu(false)
            }
        }
        window.addEventListener('scroll', IconShowMenu,{passive:true})
    },[])
    // set closed menuSlidebar
    useEffect(() =>{
        const showSlidebar = () =>{
            if(window.scrollY<=224 || window.scrollY>= 3000 ){
                setShowSlidebar(false)
            }
        }
        window.addEventListener('scroll', showSlidebar, {passive:true})
    },[])
    return(
        <div className={cx('wrapper')}>
            <div 
                className={iconShowMenu ? cx('menuSlidebar') : cx('menuNone')}
                onClick={()=>{
                    setShowSlidebar(true)
                }}
            >
                <FontAwesomeIcon  icon={faCaretRight } />
            </div>
            <div className={showSlidebar ? cx('slidebar','slidebar_active') : cx('slidebar')}>
                <section 
                    className={cx('closed')}
                    onClick= {() => setShowSlidebar(false)}
                > 
                    <FontAwesomeIcon icon={faX} />
                </section>
                <section className={cx('popular','box')}>
                    <h1 
                        className={cx('title')}
                    >popular</h1>
                    {Icons.map(icon=>(
                        <ul key={icon.id} className={cx('item')}>
                            <li className={icons === icon.content ? cx('item-list','active') : cx('item-list')}  
                                onClick={()=> {
                                    props.changeFilters(icon.content)
                                    setIcons(icon.content)
                                    setPriceId(0)
                                    setPriceup(false)
                                    setRateup(0)
                                    setChecked(false)
                                    props.changePriceId(0)
                                    props.changeRateNumber(0)
                                }}
                            >
                                <img src={icon.icon} alt="Error" />
                                <p>{icon.content}</p>
                            </li>
                        </ul>
                    ))}
                </section>
                <section className={cx('price','box')}>
                        <h1 className={cx('title')}>Price</h1>
                        {Prices.map((price=>(
                            <ul key={price.id} className={cx('item')}>
                                <li className={ 
                                    pricesup && pricesId === price.id ? cx('item-list', 'active') : cx('item-list')}
                                >
                                    <input 
                                        type={price.type} 
                                        name= "price"
                                        onClick={()=> {
                                            setPriceup(true)
                                            setPriceId(price.id)
                                            props.changePriceId(price.id)
                                            setChecked(true)
                                        }}
                                        checked= {pricesup && pricesId === price.id ? checked : false}
                                    />
                                    <p>{price.price}</p>
                                </li>
                            </ul>
                        )))}
                </section>
                <section className={cx('rate','box')}>
                        <h1 className={cx('title')}>rate</h1>
                        {Rates.map((rate=>(
                            <ul key={rate.id} className={cx('item')}>
                                <li className={rateup === rate.number ? cx('item-list','active') : cx('item-list')}
                                    onClick={()=> {
                                        setRateup(rate.number)
                                        props.changeRateNumber(rate.number)
                                    }}
                                >
                                    {[...Array(rate.number)].map((e,i)=><FontAwesomeIcon icon={Starfullcolor} className={cx('vote')} key={i} />)}
                                    {[...Array(5-rate.number)].map((e,i)=><FontAwesomeIcon icon={Starcolorborder} className={cx('noVote')} key={i} />)}
                                    
                                    <p>{rate.content}</p>
                                </li>
                            </ul>
                        )))}
                </section>
            </div>
        </div>
    )
}
Slidebar.propTypes ={
    props: PropTypes.array,
}

export default Slidebar