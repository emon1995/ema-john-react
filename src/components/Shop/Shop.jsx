import React, { useEffect, useState } from "react";
import allProducts from "../fakeData/products.json";
import Product from "../Proudct/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    // console.log(product);
    const newProduct = [...cart, product];
    setCart(newProduct);
  };

  useEffect(() => {
    fetch(
      " https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="flex flex-col-reverse gap-4  lg:flex-row lg:justify-between ">
      {/* PRODUCTS */}
      <div className="  lg:w-[70%]  mx-4 lg:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
        {products.slice(0, 6).map((product) => (
          <Product
            key={product.id}
            product={product}
            handleClick={handleClick}
          ></Product>
        ))}
      </div>
      {/* ORDER SUMMARY */}
      <div className="w-full lg:w-[25%] bg-primary p-4 mt-4 lg:mt-0 lg:mx-0 ">
        <h1 className="text-center text-white text-2xl font-bold my-8">
          Order Summary
        </h1>
        <p className="text-white font-bold">Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
