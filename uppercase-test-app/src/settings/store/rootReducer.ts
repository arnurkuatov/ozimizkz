import { combineReducers } from 'redux'
import {baseApi} from "./middlewares/baseApi";



const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
})

export { rootReducer }
