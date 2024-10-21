import React from 'react';
import { useAtom } from 'jotai';
import { orderItemsAtom } from '../../atoms/orderAtom';
import style from './orderForm.module.css'
import { addOrder } from "../../api/order";

const OrderForm = () => {
    const [orderItems, setOrderItems] = useAtom(orderItemsAtom);
    const [customerName, setCustomerName] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const order = { customerName, orderItems };
        await addOrder(order);
        setOrderItems([]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Order</h2>
            <input
                type="text"
                placeholder="Your Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
            />
            <button type="submit">Submit Order</button>
        </form>
    );
};

export default OrderForm;
