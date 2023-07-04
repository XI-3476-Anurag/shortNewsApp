import {configureStore} from '@reduxjs/toolkit'
import bookmarkedReducer from './bookmarkedSlice'


export const store = configureStore({
    reducer:{
        bookmarkedReducer,
    },
})

