import {createSlice} from '@reduxjs/toolkit'
import { fetchProduct, fetchProducts } from '../services/productService'

const initialState = {
    products: [],
    product: {}
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setProduct: (state, action) => {
            state.product = action.payload
        },
        removeSelectedProduct: (state) => {
            state.product = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload
        })
    }
})

export default productSlice.reducer;