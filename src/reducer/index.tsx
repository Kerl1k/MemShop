import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {CartReducer} from "./Cart/cartReducer";
import {ProductReducer} from "./Product/productReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {UsersReducer} from "./Users/usersReducer";
import {loginReducer} from "./login/loginReducer";

const rootReducer = combineReducers({
    info: ProductReducer,
    cart: CartReducer,
    users: UsersReducer,
    login: loginReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch