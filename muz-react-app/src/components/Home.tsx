import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="container">
      <div className="cart-section">
        <h1>Home Component</h1>
        <div className="cart-image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/644/217/original/shopping-cart-icon-vector.jpg"
            alt="cart"
          />
        </div>
      </div>
      <div className="main-cart">
        <div className="main-image">
          <img
            src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Phone"
          />
        </div>
        <div>
          <span>I-Phone</span>
          <span>Price : $ 1000.00</span>
        </div>
        <div>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
