import React, {lazy} from 'react'

// modules
const Slider = lazy(()=>import('../../layouts/components/Slider/Slider'))
const Working = lazy(()=>import('../../layouts/components/Working/Working'))
const Ingredients = lazy(()=> import('../../layouts/components/Ingredients/Ingredients'))
const BestFood = lazy(()=> import('../../layouts/components/BestFood/BestFood'))
const Delivery = lazy(()=> import('../../layouts/components/Delivery/Delivery'))
const QualityProducts = lazy(()=> import('../../layouts/components/QualityProducts/QualityProducts'))
const Information = lazy(()=> import('../../layouts/components/Information/Information'))
const Comment = lazy(()=> import('../../layouts/components/Comment/Comment'))

function Home(){
    return(
        <React.Fragment>
            <Slider />
            <Working />
            <Ingredients />
            <BestFood />
            <Delivery />
            <QualityProducts />
            <Information />
            <Comment />
        </React.Fragment>
    )
}

export default Home