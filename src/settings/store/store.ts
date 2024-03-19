import { setupListeners } from '@reduxjs/toolkit/query'
import { configureStore } from '@reduxjs/toolkit'
import {rootReducer} from "./rootReducer.ts";
import {baseApi} from "./middlewares/baseApi";



const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(baseApi.middleware),
})


type RootState = ReturnType<typeof rootReducer>
type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)

export { store }
export type { RootState, AppDispatch }
