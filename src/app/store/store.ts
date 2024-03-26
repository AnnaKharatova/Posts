import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from '../../entities/posts/api/postsApi.ts'


export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: getDefaultMidderware => getDefaultMidderware().concat(postsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>