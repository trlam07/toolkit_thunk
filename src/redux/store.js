import {configureStore} from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import {thunk} from 'redux-thunk'

const store = configureStore({
    reducer: {
        product: productReducer
    },
    middleware: () => {
        return [thunk]
    }
})

export default store;