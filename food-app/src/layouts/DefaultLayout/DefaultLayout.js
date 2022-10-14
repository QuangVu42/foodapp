import  PropTypes  from 'prop-types'
import classNames from 'classnames/bind'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Styles from './DefaultLayout.module.scss'

const cx = classNames.bind(Styles)

function DefaultLayout ({childern}){
    return(
        <div className={cx('wrapper')}>
            <Header />
                <div>{childern}</div>
            <Footer />
        </div>
    )
}
DefaultLayout.protoTypes = {
    childern: PropTypes.node.isRequired
}

export default DefaultLayout