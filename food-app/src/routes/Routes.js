import RoutesConfig from '../config/RoutesConfig'

import Home from '../page/Home/Home'
import Shop from '../page/Shop/Shop'
import Login from '../page/Login/Login'

const publicRoutes = [
    {path: RoutesConfig.home, component: Home},
    {path: RoutesConfig.shop, component: Shop},
    {path: RoutesConfig.login, component: Login, layout:null }
]
export default publicRoutes