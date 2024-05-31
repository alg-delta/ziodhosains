import "./App.css";

import Main from "./componets/Main";
import Header from "./componets/Header";
import Cart from "./componets/Cart";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Acordion from "./componets/Acordion";
import data from "./data";

import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCard, setIsCard] = useState(false);
  const addCard = () => {
    console.log("0");
    setIsCard(!isCard);
  };
  const add = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };
  const remove = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  const buy = () => {
    setCartItems([]);
    alert("вашше замовлення прийнято");
  };
  return (
    <div className="App">
      <Header addCard={addCard} />
      <Row>
        <Col>
          <Main products={data} add={add} />
        </Col>
        {isCard && (
          <Col md={4}>
            <Cart cartItems={cartItems} remove={remove} add={add} buy={buy} />
          </Col>
        )}
      </Row>
      <Acordion />
    </div>
  );
}

export default App;
