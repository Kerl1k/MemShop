import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {CartReducer} from "./Cart/cartReducer";
import {ProductReducer} from "./Product/productReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    info: ProductReducer,
    cart: CartReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch