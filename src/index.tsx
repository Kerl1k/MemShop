import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';
import Cart from './Cart'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./reducer/index";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(

    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>} />
                    <Route path="/Cart" element={<Cart/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

