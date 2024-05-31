import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
export default function Cart(props) {
  const { cartItems, add, remove, buy } = props;
  const totalPrice = cartItems.reduce(
    (sun, product) => sun + product.price * product.number,
    0
  );

  return (
    <Alert variant="success">
      <Alert.Heading>Корзина</Alert.Heading>
      {cartItems.length === 0 && <p>Корзина порожня</p>}
      <table>
        <tr>
          <td width="25%">назва</td>
          <td width="25%">кількість</td>
          <td width="25%">ціна</td>
          <td width="25%">всього</td>
        </tr>
        {cartItems.map((product) => (
          <tr>
            <td width="25%">{product.name}</td>
            <td width="25%">
              <Button onClick={() => remove(product)} variant="dark">
                -
              </Button>
              <Button onClick={() => add(product)} variant="secondary">
                +
              </Button>{" "}
              {product.number}
            </td>
            <td width="25%">{product.price}₴</td>
            <td width="25%">{product.price * product.number}₴</td>
          </tr>
        ))}
      </table>
      <hr />
      <p className="mb-0">сума до сплати {totalPrice}₴</p>
      <Button onClick={buy} variant="success" disabled={cartItems.length === 0}>
        Оформити замовлення
      </Button>
    </Alert>
  );
}
