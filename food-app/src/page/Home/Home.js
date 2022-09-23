import React from 'react'

import Slider from '../../layouts/components/Slider/Slider'
import Working from '../../layouts/components/Working/Working'
import Ingredients from '../../layouts/components/Ingredients/Ingredients'
import BestFood from '../../layouts/components/BestFood/BestFood'
import Delivery from '../../layouts/components/Delivery/Delivery'
import QualityProducts from '../../layouts/components/QualityProducts/QualityProducts'
import Information from '../../layouts/components/Information/Information'
import Comment from '../../layouts/components/Comment/Comment'

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