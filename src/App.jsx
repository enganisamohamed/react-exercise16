import { useState } from "react";

function App() {
  const products = [
    { id: 1, name: "Widget", price: 19.99 },
    { id: 2, name: "Gadget", price: 29.99 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item, index) => index !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "20px" }}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h1>Cart Summary</h1>

      <h3>Total Items: {cart.length}</h3>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}

            <button
              style={{ marginLeft: "10px" }}
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;