import React, {useState, useEffect} from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as Starfullcolor} from '@fortawesome/free-solid-svg-icons'
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
            type: 'checkbox'
        },
        {
            id:2,
            price: '$50 to $100',
            type: 'checkbox'
        },
        {
            id:3,
            price: 'Under $50',
            type: 'checkbox'
        },
        {
            id:4,
            price: 'above $100',
            type: 'checkbox'
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

    return(
        <div className={cx('wrapper')}>
            <div className={cx('slidebar')}>
                <section className={cx('popular','box')}>
                    <h1 className={cx('title')}>popular</h1>
                    {Icons.map(icon=>(
                        <ul key={icon.id} className={cx('item')}>
                            <li className={cx('item-list')}  onClick={()=> props.changeFilters(icon.content)} >
                                <img src={icon.icon} alt={icon.content} />
                                <p>{icon.content}</p>
                            </li>
                        </ul>
                    ))}
                </section>
                <section className={cx('price','box')}>
                        <h1 className={cx('title')}>Price</h1>
                        {Prices.map((price=>(
                            <ul key={price.id} className={cx('item')}>
                                <li className={cx('item-list')}>
                                    <input type={price.type} />
                                    <p>{price.price}</p>
                                </li>
                            </ul>
                        )))}
                </section>
                <section className={cx('rate','box')}>
                        <h1 className={cx('title')}>rate</h1>
                        {Rates.map((rate=>(
                            <ul key={rate.id} className={cx('item')}>
                                <li className={cx('item-list')}>
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

export default Slidebar