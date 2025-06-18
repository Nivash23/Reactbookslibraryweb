import { configureStore } from "@reduxjs/toolkit";

import Booklist from './Reduxslice';

export const bookstore = configureStore({
    reducer: {
        bookslists: Booklist,
    }
})
 

