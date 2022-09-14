import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

import Style from './Button.module.scss';

const cx = classNames.bind(Style)

function GlobalButton({
    to, href, 
    primary = false, item =false, itemLogo = false, outline = false, small = false, large= false, 
    icon, childern, onClick , ...passProps
}){
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps
    }
    
    if(to){
        props.to = to;
        Comp = Link
    }else if(href){
        props.href = href;
        Comp = 'a'
    }

    const Classes = cx('warpper',{
        primary,
        outline,
        small,
        large,
        item,
        itemLogo
    })
    return(
        <Comp className={Classes} {...props}>
            <span>
                {icon}
                {childern}
            </span>
        </Comp>
    )
}

export default GlobalButton