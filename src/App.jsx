import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/cart"
        element={<CartPage />}
      />

      <Route
        path="/product/:id"
        element={<ProductPage />}
      />

    </Routes>
  );
}

export default App;