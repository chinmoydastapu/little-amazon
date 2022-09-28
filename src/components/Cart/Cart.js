import React from 'react';

const Cart = ({cart}) => {
    // Total Price, shipping
    const totalPrice = cart.reduce((p, c) => p+c.price, 0);
    const totalShiping = cart.reduce((p, c) => p+c.shipping, 0);
    const tax = 0.15;
    const grandTotal = (totalPrice + totalShiping) + (totalPrice * tax);

    return (
        <div>
            <h1 className='text-center text-xl pb-5 font-bold'>Order Summary</h1>
            <p className='pb-2'><strong>Selected Items:</strong> {cart.length}</p>
            <p className='pb-2'><strong>Total Price:</strong> ${totalPrice}</p>
            <p className='pb-2'><strong>Shipping Charge:</strong> ${totalShiping}</p>
            <p className='pb-2'><strong>Tax:</strong> 15% (of total price)</p>
            <p className='font-bold'>Grand Total: ${grandTotal}</p>
            <button className="btn bg-red-600 hover:bg-red-400 w-full mt-7 mb-3">Clear Cart</button>
            <button className="btn bg-blue-500 hover:bg-orange-400 w-full">Review Order</button>
        </div>
    );
};

export default Cart;