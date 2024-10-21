import axios from 'axios';

export const getProducts = async () => {
    try {
        const response = await axios.get('http://localhost:5120/api/product');
        return response.data
    } catch(error) {
        console.log('Error getting products:', error);
    }
};