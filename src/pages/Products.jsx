import { useEffect, useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

function Products() {

  const [products, setProducts] =
    useState([]);

  useEffect(() => {

    async function fetchProducts() {

      try {

        const response =
          await axios.get(
            "http://localhost:5000/products"
          );

        setProducts(
          response.data
        );

      } catch (error) {

        console.log(error);
      }
    }

    fetchProducts();

  }, []);

  return (

    <div className="products-page">

      <h1>
        Produtos
      </h1>

      <div className="products-grid">

        {products.map((product) => (

          <div
            key={product._id}
            className="product-card"
          >

            <img
              src={`http://localhost:5000${product.image}`}
              alt={product.name}
              width="200"
            />

            <h2>
              {product.name}
            </h2>

            <p>
              R$ {product.price}
            </p>

            <Link
              to={`/product/${product._id}`}
            >

              <button>
                Ver Produto
              </button>

            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;