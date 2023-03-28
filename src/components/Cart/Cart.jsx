import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);

  let totalPrice = 0;
  let shipping = 0;
  for (const product of cart) {
    totalPrice += product.price;
    shipping += product.shipping;
  }

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + shipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Shipping: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)} </p>
      <h5>Grand Total: ${grandTotal.toFixed(2)} </h5>
    </div>
  );
};

export default Cart;
