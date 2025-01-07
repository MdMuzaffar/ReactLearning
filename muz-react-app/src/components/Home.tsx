import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="main-cart">
        <div>
          <img
            src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Phone"
          />
        </div>
        <div>
          <span>I-Phone</span>
          <span>Price : $ 1000.00</span>
        </div>
      </div>
      <div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Home;
