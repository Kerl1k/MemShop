import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cart from './Cart'
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/Cart" element={<Cart/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

