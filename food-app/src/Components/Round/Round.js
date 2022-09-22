import classNames from 'classnames/bind'

import Styles from './Round.module.scss'

const cx = classNames.bind(Styles)

function Round({
    children, ... passProps
}) {

    const props = {
        ... passProps
    }
    
    const Classes = cx('warpper',{

    })
    return(
        <div className={Classes} {...props}>
            {children}
        </div>
    )
}

export default Round