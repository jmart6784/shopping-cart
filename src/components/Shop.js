import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "./context/CartContext";

const Shop = () => {
  const [shop, setShop] = useState([
    {
      id: 1,
      image: "images/img1.jpg",
      name: "Laptop",
      price: 450,
      quantity: 0,
      stock: 10,
    },
    {
      id: 2,
      image: "images/img2.jpg",
      name: "Bicycle",
      price: 200,
      quantity: 0,
      stock: 20,
    },
    {
      id: 3,
      image: "images/img3.jpg",
      name: "Shoes",
      price: 30,
      quantity: 0,
      stock: 15,
    },
    {
      id: 4,
      image: "images/img4.png",
      name: "Smart Phone",
      price: 400,
      quantity: 0,
      stock: 30,
    },
    {
      id: 5,
      image: "images/img5.png",
      name: "Game console",
      price: 500,
      quantity: 0,
      stock: 22,
    },
    {
      id: 6,
      image: "images/img6.jpeg",
      name: "Tshirt",
      price: 7,
      quantity: 0,
      stock: 95,
    },
  ]);

  const [cart, setCart] = useContext(CartContext);

  const decrease = (paramItem) => {
    let tempAry = [].concat(shop);
    let modified = [];
    tempAry.forEach((item) => {
      if (item.name === paramItem.name) {
        if (item.quantity === 0) {
          modified.push(item);
        } else {
          item.quantity = item.quantity - 1;
          item.stock = item.stock + 1;
          modified.push(item);
        }
      } else {
        modified.push(item);
      }
    });
    setCart(modified);
  };

  const increase = (paramItem) => {
    let tempAry = [].concat(shop);
    let modified = [];
    tempAry.forEach((item) => {
      if (item.name === paramItem.name) {
        if (item.stock === 0) {
          modified.push(item);
        } else {
          item.quantity = item.quantity + 1;
          item.stock = item.stock - 1;
          modified.push(item);
        }
      } else {
        modified.push(item);
      }
    });
    setCart(modified);
  };

  const getQuantity = (paramItem) => {
    if (paramItem.quantity === 0) {
      paramItem.quantity = paramItem.quantity + 1;
    }

    let tempAry = [].concat(shop);
    let modified = [];
    tempAry.forEach((item) => {
      if (item.quantity > 0) {
        modified.push(item);
      }
    });

    setCart(modified);
  };

  return (
    <div id="shop-div">
      <h1>Deals of the Day</h1>
      <div className="listing-grid">
        {shop.map((item) => (
          <div key={item.id}>
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="listing"
            ></div>
            <h3>{item.name}</h3>
            <h2>${item.price}</h2>
            <h3>
              {item.stock === 0 ? "Out of Stock" : `In stock(${item.stock})`}
            </h3>
            <div>
              <button onClick={() => decrease(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increase(item)}>+</button>
            </div>
            <Link onClick={() => getQuantity(item)} to="/cart">
              Add to cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
