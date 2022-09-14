import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://ig-food-menus.herokuapp.com/',
    headers: {
        'content-type': 'application/json',
    }
})


export default axiosClient