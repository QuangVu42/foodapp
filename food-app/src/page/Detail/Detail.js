import { Fragment, lazy } from 'react'

const BannerShop = lazy(()=> import('../../layouts/components/BannerShop/BannerShop'))
const Details = lazy(()=> import('../../layouts/components/Details/Details.js'))
const Description = lazy(()=> import('../../layouts/components/Description/Description'))
const CommentCart = lazy(()=> import('../../layouts/components/CommentCarts/CommentCart'))

function Detail(){
    return(
        <Fragment>
            <BannerShop />
            <div>
                <Details />
                <Description />
                <CommentCart />
            </div>
        </Fragment>
    )
}

export default Detail