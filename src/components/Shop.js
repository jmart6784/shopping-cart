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

    tempAry.forEach((item) => {
      if (item.name === paramItem.name) {
        if (item.quantity !== 0) {
          item.quantity = item.quantity - 1;
          item.stock = item.stock + 1;
        }
      }
    });

    setShop(tempAry);
  };

  const increase = (paramItem) => {
    let tempAry = [].concat(shop);
    tempAry.forEach((item) => {
      if (item.name === paramItem.name) {
        if (item.stock !== 0) {
          item.quantity = item.quantity + 1;
          item.stock = item.stock - 1;
        }
      }
    });
    setShop(tempAry);
  };

  const getQuantity = (paramItem) => {
    // Increase the quantity of the item that got the "Add to cart" link clicked if the quantity is zero
    if (paramItem.quantity === 0) {
      paramItem.quantity = paramItem.quantity + 1;
    }

    // Copies of the cart and shop array
    let tempCart = [].concat(cart);
    let tempShop = [].concat(shop);
    let ids = [];

    tempShop.forEach((shopItem) => {
      if (shopItem.quantity > 0) {
        if (tempCart.length === 0) {
          tempCart.push(shopItem);
        } else {
          tempCart.forEach((cartItem) => {
            // Cart IDs array is populated to avoid duplicates when compared to the current shop item. if no duplicate is detected, shopItem is then pushed to tempCart
            tempCart.forEach((item) => {
              ids.push(item.id);
            });

            if (ids.includes(shopItem.id)) {
              cartItem.quantity = cartItem.quantity + shopItem.quantity;
            } else {
              tempCart.push(shopItem);
            }
          });
        }
      }
    });

    setCart(tempCart);
  };

  return (
    <div id="shop-div">
      <h1 className="shop-title">Deals of the Day</h1>
      <div className="listing-grid">
        {shop.map((item) => (
          <div className="listing-container" key={item.id}>
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="listing"
            ></div>
            <h3 className="shop-item-info">{item.name}</h3>
            <h2 className="shop-item-info">${item.price}</h2>
            <h3 className="shop-item-info">
              {item.stock === 0 ? "Out of Stock" : `In stock(${item.stock})`}
            </h3>
            <div className="quantity-container">
              <button onClick={() => decrease(item)} className="quantity-btn">
                -
              </button>
              <span className="current-quantity">{item.quantity}</span>
              <button onClick={() => increase(item)} className="quantity-btn">
                +
              </button>
            </div>
            <Link
              onClick={() => getQuantity(item)}
              to="/cart"
              className="shop-add-cart"
            >
              Add to cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
