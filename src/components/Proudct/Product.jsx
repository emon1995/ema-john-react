import React from "react";
import Button from "../Button/Button";

const Product = (props) => {
  //   console.log(props);
  const { id, name, img, price, ratings, seller } = props.product;

  return (
    <>
      <div className="card w-full bg-base-100 shadow-2xl relative">
        <figure className="px-4 lg:px-10 pt-10">
          <img src={img && img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className=" items-start text-left">
          <div className="p-10 mb-4">
            <h2 className="card-title">{name}</h2>
            <p>Price: {price}</p>
            <p>Manufacture: {seller}</p>
            <p>Ratings: {ratings} stars</p>
          </div>
          <div
            onClick={() => props.handleClick(props.product)}
            className="absolute w-full bottom-0"
          >
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
