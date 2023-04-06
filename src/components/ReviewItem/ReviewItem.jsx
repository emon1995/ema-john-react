import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ order, handleDeleteCart }) => {
  const { name, id, img, price, quantity } = order;

  return (
    <div className="reviewItem">
      <div className="itemInfo">
        <img className="itemImg" src={img} alt="item" />
        <div>
          <h3>{name}</h3>
          <p>
            Price: <span className="orange-text">${price}</span>
          </p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
      <div className="btnInfo">
        <button onClick={() => handleDeleteCart(id)} className="btn-delete">
          <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
