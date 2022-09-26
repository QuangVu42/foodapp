import React from 'react'
import classNames from 'classnames/bind'

import Styles from './Pagination.module.scss'

const cx = classNames.bind(Styles)

function Pagination({postsPerPage, totalPosts, paginate}){
    const pageNumbers = []
    for(let i = 0; i <= Math.ceil( totalPosts / postsPerPage); i++){
        pageNumbers.push(i+1)
    }
    const pageNumber = pageNumbers.slice(0, pageNumbers.length-1)
    return (
        <div className={cx('wrapper')}>
            <ul  className={cx('pagination')}>
                {pageNumber.map((number,index)=>(
                    <li key ={index} className={cx('page-item')}>
                        <a href="#" className={cx('page-link')} onClick={()=> paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination