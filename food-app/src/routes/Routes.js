import RoutesConfig from '../config/RoutesConfig'

import Home from '../page/Home/Home'
import Shop from '../page/Shop/Shop'
import Login from '../page/Login/Login'
import Cart from '../page/Cart/Cart'

const publicRoutes = [
    {path: RoutesConfig.home, component: Home},
    {path: RoutesConfig.shop, component: Shop},
    {path: RoutesConfig.cart, component: Cart},
    {path: RoutesConfig.login, component: Login, layout:null }
]
export default publicRoutes