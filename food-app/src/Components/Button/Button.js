import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import Style from './Button.module.scss';

const cx = classNames.bind(Style)

function GlobalButton({
    to, href, id,
    primary = false, item =false, itemLogo = false, 
    outline = false, small = false, large= false,
    circle = false, login = false,
    state,
    element,btnIcon ,icon, children, onClick , ...passProps
}){
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps
    }
    
    if(to){
        Comp = Link
    }else if(href){
        props.href = href;
        Comp = 'a'
    }
    const Classes = cx('wrapper',{
        primary,
        outline,
        small,
        item,
        circle,
        btnIcon,
        login,
        element
    })
    return(
        <Comp className={Classes} to={to} {...props} state={{state}} id={id}>
                <div className={cx('icon')}>
                    {icon}
                </div>
                {children}
                {element}
        </Comp>
    )
}

GlobalButton.propTypes = {
    to: PropTypes.string, 
    href: PropTypes.string, 
    id: PropTypes.string,
    primary: PropTypes.bool, 
    item: PropTypes.bool, 
    itemLogo: PropTypes.bool, 
    outline: PropTypes.bool, 
    small: PropTypes.bool,
    large: PropTypes.bool,
    circle: PropTypes.bool, 
    login: PropTypes.bool, 
    onClick: PropTypes.func,
}
export default GlobalButton