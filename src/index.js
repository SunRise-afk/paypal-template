import React from 'react';
import ReactDOM from 'react-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

const config = process.env;

ReactDOM.render(
    <React.StrictMode>
        <PayPalScriptProvider options={{
            currency: config.REACT_APP_CURRENCY,
            "client-id": config.REACT_APP_CLIENT_ID,
        }}>
            <App />
        </PayPalScriptProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
