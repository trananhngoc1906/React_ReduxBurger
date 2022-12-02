import {configureStore} from '@reduxjs/toolkit'
import { BurgerReducer } from './BurgerReducer'



export const store = configureStore({
    reducer:{
        BurgerReducer
    }
})