import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';

// context
import { TransactionsContextProvider } from './context/TransactionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TransactionsContextProvider>
        <App />
    </TransactionsContextProvider>
);

