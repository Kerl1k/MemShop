import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {CartReducer} from "./cartReducer";
import {ProductReducer} from "./productReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    info: ProductReducer,
    cart: CartReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>