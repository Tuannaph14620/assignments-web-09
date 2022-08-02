import instance from "./instance";

export const listCate = ()=>{
    const url = `categorys`
    return instance.get(url)
}
export const listOneCate = (id)=>{
    const url = `categorys/${id}`
    return instance.get(url)
}
export const addCate = (category)=>{
    const url = `categorys`
    return instance.post(url,category)
}
export const removeCate = (id)=>{
    const url = `categorys/${id}`
    return instance.delete(url)
}
export const updateCate = (category)=>{
    const url = `categorys/${category.id}`
    return instance.put(url, category)
}