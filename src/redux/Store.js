import { configureStore } from "@reduxjs/toolkit"; 
import cartSlice from "./CartSlice"

// state ko localStorage me save kar rhe hai
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state.cart)
        localStorage.setItem("cartState" ,serializedState)
    } catch (error) {
        console.log(error);
        
    }
}

// localstorage me save state ko waha se wps la rha hai state change hone pe
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("cartState")
        if (!serializedState) return undefined;
        return { cart : JSON.parse(serializedState)}
    } catch (error) {
        return undefined
    }
}

export const store = configureStore({
    reducer: {
        cart: cartSlice
    },
    preloadedState: loadState()
}) 

// har state change pe save karna
store.subscribe(()=>{
    saveState(store.getState())
})

