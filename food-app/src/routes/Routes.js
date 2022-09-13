import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'

const publicRoutes = [
    {path:'/', component: Home},
    {path:'/Header', component: Header},
    {path:'/Footer', component: Footer, layout: Header}
]
export default publicRoutes