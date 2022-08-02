import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addProduct, getProductA_Z, getProductNew, getProductSearch, getProductZ_A, ListCateProduct, listOneProduct, listProduct, ListProductHome, removeProduct, updateProduct } from "../api/product";

export const listProducts = createAsyncThunk(
    "product/listProduct",
    async () =>{
        const {data} = await listProduct()
        return data
    }
)
export const listProductsOne = createAsyncThunk(
    "product/listProductOne",
    async (id) =>{
        const {data} = await listOneProduct(id)
        return data
    }
)
export const ListProductsHome = createAsyncThunk(
    "product/listProductHome",
    async () =>{
        const {data} = await ListProductHome()
        return data
    }
)
export const CateProduct = createAsyncThunk(
    "product/cateProduct",
    async (id) =>{
        const {data} = await ListCateProduct(id)
        // console.log("catePro1",data.products);
        return data
    }
)
export const SearchProduct = createAsyncThunk(
    "product/searchProduct",
    async (post) =>{
        const {data} = await getProductSearch(post.data)
        console.log("searchPro",post.data);
        return data
    }
)

export const addProducts = createAsyncThunk(
    "product/addProduct",
    async (product) =>{
        const {data} = await addProduct(product)
        return data
    }
)
export const editProducts = createAsyncThunk(
    "product/editProduct",
    async (id) =>{
        const {data} = await updateProduct(id)
        return data
    }
)
export const removeProducts = createAsyncThunk(
    "product/removeProduct",
    async (id) =>{
        const {data} = await removeProduct(id)
        return data
    }
)
export const SortProductA_Z = createAsyncThunk(
    "product/sortProductAZ",
    async () =>{
        const {data} = await getProductA_Z()
        return data
    }
)
export const SortProductZ_A = createAsyncThunk(
    "product/sortProductZA",
    async () =>{
        const {data} = await getProductZ_A()
        return data
    }
)
export const SortProductNew = createAsyncThunk(
    "product/sortProductNew",
    async () =>{
        const {data} = await getProductNew()
        return data
    }
)


const ProductSlice = createSlice({
    name: "product",
    initialState:{
        value: []
    },
    extraReducers: (builder)=>{
        builder.addCase(SortProductA_Z.fulfilled, (state, actions) =>{
            console.log("sAZ", actions);
            state.value = actions.payload
        })
        builder.addCase(SortProductZ_A.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
        builder.addCase(SortProductNew.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
        builder.addCase(listProducts.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
        builder.addCase(listProductsOne.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
        builder.addCase(ListProductsHome.fulfilled, (state, actions) =>{
            state.value = actions.payload
        })
        builder.addCase(CateProduct.fulfilled, (state, actions) =>{
            // console.log("catePro",actions);
            state.value = actions.payload.products
        })
        builder.addCase(SearchProduct.fulfilled, (state, actions) =>{
            // console.log("Search",actions);
            state.value=actions.payload
        })
        builder.addCase(addProducts.fulfilled, (state, actions) =>{
            state.value.push(actions.payload)
        })
        builder.addCase(removeProducts.fulfilled, (state, actions) =>{
            console.log(actions);
            state.value = state.value.filter(item => item.id !== actions.meta.arg)
        })
        builder.addCase(editProducts.fulfilled, (state, actions) =>{
            state.value.push(actions.payload)
            
        })

    }

})

export default ProductSlice.reducer