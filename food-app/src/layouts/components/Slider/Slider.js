import { useEffect } from 'react'
import classNames from 'classnames/bind'

import Styles from './Slider.module.scss'

import axiosClient from '../../../apis/axiosClient'
const cx = classNames.bind(Styles)

function Slider(){

    // call api
    useEffect(() => {
        const fetchApi = async () => {
            const res = await axiosClient.get('bbqs')
            console.log(res.data)
            return res.data
        }
        fetchApi()
    })
    return(
        <div className={cx('warpper')}>
            <h1>demo </h1>
        </div>
    )
}

export default Slider