import { Fragment, lazy } from 'react'

const BannerShop = lazy(()=> import('../../layouts/components/BannerShop/BannerShop'))
const Carts = lazy(()=> import('../../layouts/components/Carts/Carts'))
const Description = lazy(()=> import('../../layouts/components/Description/Description'))
const CommentCart = lazy(()=> import('../../layouts/components/CommentCarts/CommentCart'))

function Cart(){
    return(
        <Fragment>
            <BannerShop />
            <div>
                <Carts />
                <Description />
                <CommentCart />
            </div>
        </Fragment>
    )
}

export default Cart