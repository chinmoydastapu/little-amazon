import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    //Cart event handling
    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='my-10 flex'>
            <div className='w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10'>
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='w-1/5 border h-fit mr-[40px] p-4 bg-[#FF99004D] sticky top-[40px] rounded-lg'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;