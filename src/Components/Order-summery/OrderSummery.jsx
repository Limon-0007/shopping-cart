import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummery = ({cart, clearCart}) => {
    let price = 0
    let totalShipping = 0
    let quantity = 0
    for (const prices of cart){
      if(prices.quantity === 0) {
        prices.quantity = 1
      }
        price = price + prices.price * prices.quantity
        totalShipping = totalShipping + prices.shipping * prices.quantity
        quantity = quantity + prices.quantity
    }
    const tax = price * 7 / 100 
    const grandTotal = price + totalShipping + tax
    return (
    <div>
      <h6>Selected Items: {quantity}</h6>
      <h6>Total Price: ${price}</h6>
      <h6>Total Shipping Charge: ${totalShipping.toFixed(2)}</h6>
      <h6>Tax: ${tax.toFixed(2)}</h6>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      <button onClick={clearCart} className="btn btn-danger fw-semibold w-100 mb-2 mt-2">
        Clear Cart <i className="bi bi-trash-fill"></i>
      </button>
      <Link to='/checkout'>
      <button className="btn btn-secondary fw-semibold text-white w-100 my-auto">
        Proceed checkout <i className="bi bi-currency-dollar fs-5"></i>
      </button></Link>
    </div>
    );
};

export default OrderSummery;