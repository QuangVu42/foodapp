import Header from '../layouts/components/Header/Header'
import Footer from '../layouts/components/Footer/Footer'
import BestFood from '../layouts/components/BestFood/BestFood'
import Home from '../page/Home/Home'

const publicRoutes = [
    {path:'/', component: Home},
    {path:'/Header', component: Header, layout: null},
    {path:'/Footer', component: Footer, layout: BestFood}
]
export default publicRoutes