import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  // console.log(cart);

  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // product.quantity = product.quantity || 1;
    totalPrice += product.price * product.quantity;
    shipping += product.shipping;
    quantity += product.quantity;
  }

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + shipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Shipping: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)} </p>
      <h5>Grand Total: ${grandTotal.toFixed(2)} </h5>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart </span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      <p>{children}</p>
    </div>
  );
};

export default Cart;
