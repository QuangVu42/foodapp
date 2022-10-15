import React, { useState } from 'react'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import Styles from './Pagination.module.scss'

const cx = classNames.bind(Styles)

function Pagination({postsPerPage, totalPosts, paginate}){

    const [page, setPage] = useState(1)

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
                        <a href="#" className={page === number ? cx('page-link','active') : cx('page-link')} 
                            onClick={()=>{
                                setPage(number)
                                paginate(number)
                            }}
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Pagination.propTypes = {
    postsPerPage: PropTypes.number.isRequired, 
    totalPosts: PropTypes.number.isRequired, 
    paginate: PropTypes.func.isRequired,
}
export default Pagination