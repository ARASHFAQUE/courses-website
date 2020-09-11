import React from 'react';
import './Price.css'

const Price = ( props ) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price;
        
    }
    return (
        <div>
            <h2>Price Details</h2>
            <hr/>
            <h3>Courses Added: {cart.length}</h3>
            <h2>Total Price: ${total.toFixed(2)}</h2>
        </div>
    );
};

export default Price;