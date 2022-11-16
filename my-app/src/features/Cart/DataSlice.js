import {createSlice} from '@reduxjs/toolkit'

const initialState = []

const dataSlice = createSlice({
    name:"items",
    initialState:initialState,
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
         return state = state.filter((item) => item.id !== action.payload)
        }
    }
})

export default dataSlice.reducer
export const {add,remove} = dataSlice.actions