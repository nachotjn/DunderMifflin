import axios from 'axios';

export const addOrder = async (order) => {
    try {
        const res = await axios.post('/api/order', order);
        return res.data
    } catch(error) {
        console.log('Error adding order:', error);
        throw error
    }
}