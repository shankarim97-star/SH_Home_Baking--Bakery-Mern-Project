import React from "react"; 
import ProductCard from "../components/Productcard";
import brownieImage from "../assets/Brownies.jpg";
import blondieImage from "../assets/Blondie.jpg";
import cookieImage from "../assets/Cookies.jpg";
const products = [
  {
    id: 1,
    name: "Brownie",
    price: 450,
    image: brownieImage,
    qty: 1,
  },
  {
    id: 2,
    name: "Blondie",
    price: 80,
    image: blondieImage,
    qty: 1,
  },
  {
    id: 3,
    name: "Cookies",
    price: 200,
    image: cookieImage,
    qty: 1,
  },
];

function Menu({ addToCart }) {
  return (
    <div className="menu">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} quantity={item.qty} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Menu;
