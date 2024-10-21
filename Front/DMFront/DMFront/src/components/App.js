import React from 'react';
import ProductList from './Components/ProductList/ProductList';
import OrderForm from './Components/OrderForm/OrderForm';
import OrderHistory from './Components/OrderHistory/OrderHistory';
import './App.css'

const App = () => {
    return (
        <div>
            <h1>Dunder Mifflin Paper Company</h1>
            <ProductList />
            <OrderForm />
            <OrderHistory />
        </div>
    );
};

export default App;
