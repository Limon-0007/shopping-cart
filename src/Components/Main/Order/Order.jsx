import React from "react";

const Order = (items) => {
    let price = 0
    let totalShipping = 0
    for (const prices of items.items){
        price = price + prices.price
        totalShipping = totalShipping + prices.shipping
    }
    const tax = price * 7 / 100
    const grandTotal = price + totalShipping + tax
  return (
    <div>
      <h6>Selected Items: {items.items.length}</h6>
      <h6>Total Price: ${price}</h6>
      <h6>Total Shipping Charge: ${totalShipping}</h6>
      <h6>Tax: ${tax}</h6>
      <h4>Grand Total: ${grandTotal}</h4>
      <button className="btn btn-danger fw-semibold w-100 mb-2 mt-2">
        Clear Cart <i className="bi bi-trash-fill"></i>
      </button>
      <button className="btn btn-secondary fw-semibold text-white w-100 my-auto">
        Review Order <i className="bi bi-arrow-right fs-6"></i>
      </button>
    </div>
  );
};

export default Order;
