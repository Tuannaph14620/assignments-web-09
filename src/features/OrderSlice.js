import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addOrder, listOneOrder, listOrder, removeOrder } from "../api/order";

export const AddOrders = createAsyncThunk(
    "order/addOrder",
    async (product)=>{
        const {data} = await addOrder(product)
        localStorage.removeItem('cart')
        return data
    }
)
export const ListOneOrders = createAsyncThunk(
    "order/listOneOrder",
    async (id)=>{
        const {data} = await listOneOrder(id)
        return data
    }
)
export const RemoveOrders = createAsyncThunk(
    "order/removeOrder",
    async (id)=>{
        const {data} = await removeOrder(id)
        return data
    }
)
export const ListOrders = createAsyncThunk(
    "order/listOrder",
    async ()=>{
        const {data} = await listOrder()
        return data
    }
)

const OrderSlice = createSlice({
    name: 'order',
    initialState:{
        value: []
    },
    extraReducers: (builder)=>{
        builder.addCase(AddOrders.fulfilled,(state, action)=>{
            state.value.push(action.payload)
        })
        builder.addCase(ListOneOrders.fulfilled,(state, action)=>{
            state.value = action.payload
        })
        builder.addCase(ListOrders.fulfilled,(state, action)=>{
            state.value = action.payload
        })
        builder.addCase(RemoveOrders.fulfilled, (state, action)=>{
            state.value = state.value.filter(item=> item.id !== action.meta.arg)
        }) 
    }
})

export default OrderSlice.reducer