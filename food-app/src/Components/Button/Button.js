import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

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

export default GlobalButton