import "./header.css";

import { FaShoppingCart } from "react-icons/fa";

import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";

function Header() {

  const { cartItems } =
    useContext(CartContext);

  const totalItems = cartItems.reduce(

    (acc, item) => {

      const quantity =
        Number(item.quantity) || 0;

      return acc + quantity;
    },

    0
  );

  return (
    <header className="header">

      <h2>
        DripStore
      </h2>

      <nav>

        <Link to="/">
          Home
        </Link>

        <Link to="/">
          Produtos
        </Link>

        <Link
          to="/cart"
          className="cart-link"
        >

          Carrinho

          <FaShoppingCart />

          <span className="cart-count">
            {totalItems}
          </span>

        </Link>

      </nav>

    </header>
  );
}

export default Header;