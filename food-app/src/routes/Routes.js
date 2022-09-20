import Header from '../layouts/components/Header/Header'
import Footer from '../layouts/components/Footer/Footer'
import Home from '../layouts/components/Home/Home'

const publicRoutes = [
    {path: '/', component: Home},
    {path:'/Header', component: Header},
    {path:'/Footer', component: Footer, layout: Header}
]
export default publicRoutes