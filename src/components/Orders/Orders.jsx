import React, { useState } from "react";
import "./Orders.css";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const orders = useLoaderData();
  const [cart, setCart] = useState(orders);

  const handleDeleteCart = (id) => {
    const items = cart.filter((item) => item.id !== id);
    setCart(items);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((order) => (
          <ReviewItem
            key={order.id}
            order={order}
            handleDeleteCart={handleDeleteCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          Proceed Cart
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
