import { CommonRequest } from "./CommonRequest"
import { base_url } from "./base_url"


export const alldata=async()=>{
    return await CommonRequest("GET",`${base_url}`,"")

}

export const viewdata=async(id)=>{
    return await CommonRequest("GET",`${base_url}/${id}`,"")
}