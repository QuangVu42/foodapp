import React,{ Fragment, lazy }  from 'react'

const Carts = lazy(()=> import ('../../layouts/components/Carts/Carts'))
const BannerShop = lazy(()=> import("../../layouts/components/BannerShop/BannerShop.js"))

function Cart(){
    return(
        <Fragment>
            <BannerShop />
            <div>
                <Carts />
            </div>
        </Fragment>
    )
}

export default Cart