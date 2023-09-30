import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';
import Cart from './Cart'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reducer";
import Registration from "./Registration";
import Login from "./Login";
import User from './User';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Registration" element={<Registration />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/User" element={<User />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);

