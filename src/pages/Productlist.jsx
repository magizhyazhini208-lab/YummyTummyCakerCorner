import { useState } from "react";
import products from "../data/product";
import { useNavigate } from "react-router-dom";
import "./productList.css";

function ProductList() {
  const navigate = useNavigate();

  const person = JSON.parse(localStorage.getItem("Person")) || {};
  const email = person.email || "guest";

  const storedCart =
    JSON.parse(localStorage.getItem(`GotoCart-${email}`)) || [];
  const storedCartItems =
    JSON.parse(localStorage.getItem(`GotoCartItem-${email}`)) || [];

  const [cart, setCart] = useState(storedCart);

  const cartHandle = (id) => {
    if (cart.includes(id)) {
      navigate("/cart", { replace: true });
    } else {
      const updatedCart = [...cart, id];
      const updatedCartItems = [
        ...storedCartItems,
        products.find((p) => p.id === id),
      ];

      localStorage.setItem(
        `GotoCart-${email}`,
        JSON.stringify(updatedCart)
      );
      localStorage.setItem(
        `GotoCartItem-${email}`,
        JSON.stringify(updatedCartItems)
      );

      setCart(updatedCart);
    }
  };

  return (
    <>
      <h1>Yummy Tummy!!! 😍</h1>

      <ul className="card">
        {products.map((p) => (
          <li key={p.id} className="cardList">
            <div onClick={() => navigate(`/product/${p.id}`)}>
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <h4>{p.shortDescription}</h4>
              <h5>
                <s>${p.actualRate}</s>{" "}
                <strong>${p.offerRate}</strong> offer:
                {p.discountPercentage}%
              </h5>
            </div>

            <div>
              <button onClick={() => cartHandle(p.id)}>
                {cart.includes(p.id) ? "GotoCart" : "AddtoCart"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
