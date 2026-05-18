import { useParams } from "react-router-dom";

import {
  useState,
  useContext
} from "react";

import Header from "../components/Header/Header";

import products from "../data/products";

import "../styles/product-page.css";

import { CartContext } from "../context/CartContext";

function ProductPage() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedSize, setSelectedSize] =
    useState(product.sizes[0]);

  const [quantity, setQuantity] =
    useState(1);

  const { addToCart } =
    useContext(CartContext);

  return (
    <>
      <Header />

      <div className="product-page">

        <img
          src={product.image}
          alt={product.name}
        />

        <div className="product-info">

          <h1>
            {product.name}
          </h1>

          <p className="price">
            R$ {product.price}
          </p>

          <p>
            {product.description}
          </p>

          <h3>
            Tamanho
          </h3>

          <div className="sizes">

            {product.sizes.map((size) => (

              <button
                key={size}

                className={
                  selectedSize === size
                    ? "active-size"
                    : ""
                }

                onClick={() =>
                  setSelectedSize(size)
                }
              >
                {size}
              </button>

            ))}

          </div>

          <h3>
            Quantidade
          </h3>

          <input
            type="number"

            min="1"

            value={quantity}

            onChange={(e) =>

              setQuantity(
                Number(e.target.value)
              )
            }
          />

          <button
            className="buy-button"

            onClick={() =>

              addToCart(
                product,
                selectedSize,
                quantity
              )
            }
          >
            Adicionar ao carrinho
          </button>

        </div>

      </div>
    </>
  );
}

export default ProductPage;