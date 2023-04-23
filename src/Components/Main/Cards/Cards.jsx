import React, { useEffect, useState } from "react";
import {
  addToDb,
  getShoppingCart,
} from "../../ema-john-resources/utilities/fakedb";
import Order from "../Order/Order";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const addToCart = (products) => {
    let newCart = []
    // const newItems = [...items, products];
    //if product doesn't exist in the cart the set the quantity of the cart is 1
    // if exist update quantity by 1
    const exists = items.find(product => product.id === products.id)
    if(!exists){
      products.quantity = 1
      newCart = [...items, products]
    } else {
      exists.quantity = exists.quantity + 1
      const remaining = items.filter(product => product.id !== products.id)
      newCart = [...remaining, exists]
    }
    setItems(newCart);
    addToDb(products.id);
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = []
    // step 1: get id
    for (const id in storedCart) {
      // step 2: get the products by id
      const addedProduct = cards.find((card) => card.id == id);
      // step 3: get the quantity
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: added the product to the saved cart
        savedCart.push(addedProduct)
      }
    }
    //step 5: set the cart
    setItems(savedCart)
  }, [cards]);
   // clear cart 
   const clearCart = () => {
    localStorage.removeItem('shopping-cart')
    setItems([])
  }

  return (
    <div className="row">
      <div className="col-md-8">
        <div className="row">
          {cards.map((card) => {
            const { name, price, seller, ratings, img, id } = card;

            return (
              <div key={id} className="col-md-6 col-sm-12 g-4">
                <div className="card h-100">
                  <img
                    src={img ? img : "No data found"}
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h6 className="card-title">{name ? name : "Not found"}</h6>
                    <p className="card-text fw-semibold">
                      Price: ${price ? price : "Not found"}
                    </p>
                    <p className="card-text fw-semibold">
                      Manufacturer: {seller ? seller : "Not found"}
                    </p>
                    <p className="card-text fw-semibold">
                      Rating: {ratings ? ratings : "Not found"} star
                    </p>
                  </div>
                  <div
                    onClick={() => addToCart(card)}
                    className="card-footer bg-warning btn"
                  >
                    <p className="fw-semibold text-center my-auto text-secondary">
                      Add to Cart <i class="bi bi-cart-check-fill"></i>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* summery */}
      <div className="col-md-4">
        <div className="mt-4 bg-warning px-4 py-5 text-white rounded">
          <h4>Order Summery</h4>
          <Order items={items} clearCart={clearCart}></Order>
        </div>
      </div>
    </div>
  );
};

export default Cards;
