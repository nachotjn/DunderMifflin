import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { productsAtom } from '../atoms/productsAtom';

const ProductsList = () => {
    const [products, setProducts] = useAtom(productsAtom);

    useEffect(() => {
        // Simula la carga de productos desde un API o backend
        const fetchProducts = async () => {
            const response = await fetch('/api/products'); // Cambia la URL por tu API real
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, [setProducts]);

    return (
        <div>
            <h1>Products List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;
