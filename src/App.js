import React, { useState } from "react";
import "./App.css";
import PayPal from "./components/PayPal";
import Camera from "./camera.jpg";

function App() {
  const [checkout, setCheckOut] = useState(false);

  const Item = (props) => (
    <div className="item-container">
      <div className="item-image">
        <img src={props.img} alt="image" />
        <div className="item-details">
          <h3 className="item-name"> {props.name} </h3>
          <h2 className="item-price"> {props.price} </h2>
        </div>
      </div>
    </div>
  );

  const Checkout = (props) => (
    <div className="checkout">
      <div className="checkout-container">
        <h3 className="heading-3">Checkout</h3>

        <Button text="Place order" />
      </div>
    </div>
  );

  const Button = (props) => (
    <button
      className="checkout-btn"
      type="button"
      onClick={() => {
        setCheckOut(true);
      }}
    >
      {props.text}
    </button>
  );

  return (
    <div className="App">
      {checkout ? (
        <div className="app-container">
          <PayPal />
        </div>
      ) : (
        <>
          <div className="app-container">
            <div className="row">
              <div className="col">
                <Item name="Instax Mini 90 Neo Classic" price="$10.00" img={Camera} />
              </div>
              <div className="col no-gutters">
                <Checkout />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="footer_text">
        <h3>All rights reserved by Manish Kumar ©</h3>
      </div>
    </div>
  );
}

export default App;
