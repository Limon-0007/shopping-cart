import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../Review-Item/ReviewItem';
import { removeFromDb } from '../ema-john-resources/utilities/fakedb';
import OrderSummery from '../Order-summery/OrderSummery';

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)
    const removeItemFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    const clearCart = () => {
        localStorage.removeItem('shopping-cart')
        setCart([])
      }
    return (
        <div className='container'>
        <div className="row">
      <div className="col-md-8">
        <div className="row mt-4">
          {
            cart.map(item => <ReviewItem key={item.id}
                item={item} removeItemFromCart={removeItemFromCart}></ReviewItem>
            )
          }
        </div>
      </div>
      {/* summery */}
      <div className="col-md-4">
        <div className="mt-4 bg-warning px-4 py-5 text-white rounded">
          <h4>Order Summery</h4>
          <OrderSummery clearCart={clearCart} cart={cart}></OrderSummery>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Orders;