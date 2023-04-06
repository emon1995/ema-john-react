import { getShoppingCart } from "../utilities/fakedb";

const cardProductLoaders = async () => {
  const storedCard = getShoppingCart();
  const savedCard = [];

  const res = await fetch("products.json");
  const data = await res.json();

  for (const id in storedCard) {
    const addedProduct = data.find((product) => product.id === id);
    if (addedProduct) {
      addedProduct.quantity = storedCard[id];
      savedCard.push(addedProduct);
    }
  }

  return savedCard;
};

export default cardProductLoaders;
