import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import Styles from './Round.module.scss'

const cx = classNames.bind(Styles)

function Round({
    width, height, top, bottom, left, right, 
    list, item,
    children, ... passProps
}) {

    const props = {
        ... passProps
    }
    
    const Classes = cx('wrapper',{
        list,
        item
    })

    const styles = {
        width: width,
        height: height,
        top: top,
        right: right,
        left: left,
        bottom: bottom,
    }
    return(
        <div className={Classes} {...props} style={styles} id ={item ? 'round-btn' : 'round-list'}>
            {children}
        </div>
    )
}

Round.propTypes = {
    width: PropTypes.number, 
    height: PropTypes.number, 
    top: PropTypes.number, 
    bottom: PropTypes.number, 
    left: PropTypes.number, 
    right: PropTypes.number, 
    list: PropTypes.bool, 
    item: PropTypes.bool, 
}
export default Round