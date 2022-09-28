import classNames from 'classnames/bind'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faStar as Starfullcolor} from '@fortawesome/free-solid-svg-icons'
import { faStar as Starcolorborder} from '@fortawesome/free-regular-svg-icons'

import Styles from './CommentCart.module.scss'
import Button from '../../../Components/Button/Button'

const cx = classNames.bind(Styles)

function CommentCart(){
    return(
        <div className={cx('wrapper')}>
            <div id='container'>
                <h1>Comments</h1>
                <div className={cx('content')}>
                    <div className={cx('header')}>
                        <div className={cx('user')}>
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <p className={cx('name')}>user</p>
                        <div className={cx('star')}>
                            {[...Array(5)].map((e,i)=><FontAwesomeIcon icon={Starfullcolor} className={cx('vote')} key={i} />)}
                            <p>(Please choose an one)</p>
                        </div>
                    </div>
                    <div className={cx('comment')}>
                        <textarea placeholder="Type your comment here..." className={cx('comment-content')}></textarea>
                    </div>
                    <div className={cx('btn')}>
                        <Button 
                            primary
                            href='#'
                            children={'post comment'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCart