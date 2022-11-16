import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    loading:false,
    data:[],
    error:""
}
export const fetchItems = createAsyncThunk('items/fetchItems',async()=>{
    return await axios.get("./data/feeds.json").then((res)=>res.data)
}) 
const cartSlice = createSlice({
    name:"items",
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchItems.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(fetchItems.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
            state.error = ""
        })
        builder.addCase(fetchItems.rejected,(state,action)=>{
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

export default cartSlice.reducer