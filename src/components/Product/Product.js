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
                w-full hover:bg-orange-400 font-semibold">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;