import React from 'react';

const Product = (props) => {
    const { name, img, price, seller, ratings, category } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-lg truncate">
                <figure><img src={img} alt="Product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-lg font-medium'><strong>Category:</strong> {category}</p>
                    <p><strong>Price:</strong> ${price}</p>
                    <p><strong>Brand:</strong> {seller}</p>
                    <small><strong>Ratings:</strong> {ratings} Star</small>
                </div>
                <button onClick={() => handleAddToCart(props.product)} className="btn border-0 rounded-none bg-orange-500 
                w-full hover:bg-orange-400 font-semibold"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;