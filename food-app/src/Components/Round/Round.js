import classNames from 'classnames/bind'

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
        <div className={Classes} {...props} style={styles}>
            {children}
        </div>
    )
}

export default Round