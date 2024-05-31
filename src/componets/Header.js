import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
export default function Header(props) {
  const { addCard } = props;

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ZIODHOSAINS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://ab3.army">Home</Nav.Link>
            <Nav.Link href="https://steamcommunity.com/profiles/76561199015093929/">
              steam
            </Nav.Link>
            <Nav.Link href="https://www.chess.com/home">chess</Nav.Link>
          </Nav>
          <Button onClick={addCard} variant="dark">
            Корзина
          </Button>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
