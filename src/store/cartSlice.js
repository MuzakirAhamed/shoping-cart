import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addCart(state,action){
            state.push(action.payload)
        },
        deletCart(state,action){
           return state.filter(item=>item.id !== action.payload)
        }
    }
})
export const {addCart,deletCart} = cartSlice.actions
export default cartSlice.reducer