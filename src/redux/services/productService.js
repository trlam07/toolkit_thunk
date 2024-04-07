import {createAsyncThunk} from '@reduxjs/toolkit'
import fakeStoreApi from '../../api/fakeStorApi'

export const fetchProducts = createAsyncThunk('product/fetchProducts', async() => {
    const response = await fakeStoreApi().get('');
    console.log('response:', response);
    return response.data;
})

export const fetchProduct = createAsyncThunk('product/fetchProduct', async(id) => {
    const response = await fakeStoreApi().get(`/${id}`);
    console.log('response:', response);
    return response.data;
})