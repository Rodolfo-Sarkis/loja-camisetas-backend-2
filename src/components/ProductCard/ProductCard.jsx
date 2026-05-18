import "./product-card.css";

import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">

      <Link to={`/product/${product.id}`}>

        <img
          src={product.image}
          alt={product.name}
        />

      </Link>

      <div className="card-info">

        <h3>{product.name}</h3>

        <p>
          R$ {product.price}
        </p>

        <button
          onClick={() =>
            addToCart(
              product,
              product.sizes?.[0],
              1
            )
          }
        >
          Adicionar ao carrinho
        </button>

      </div>

    </div>
  );
}

export default ProductCard;