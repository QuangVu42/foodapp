import axiosClient from "./axiosClient";

const productApi = async (params) =>{
    try {
        const response = await axiosClient.get(`${params}`)
        return response.data
    }catch(e){
        console.log(e)
    }
}
export default productApi
