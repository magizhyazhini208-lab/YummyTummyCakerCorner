import React, { useState } from "react";
import products from "../data/product";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate=useNavigate();
  const person = JSON.parse(localStorage.getItem("Person"));
  const gotocart = JSON.parse(
    localStorage.getItem(`GotoCart-${person.email}`)) || [];
  const gotocartitem = JSON.parse(
    localStorage.getItem(`GotoCartItem-${person.email}`)) || [];
  const [items, setItems] = useState(gotocartitem);
  if (items.length === 0) return <h1>🛒Your Cart is Empty</h1>;
  const basePrice = items.reduce((acc, item) => acc + item.qty * item.offerRate,0);
  let CGST=Math.floor(basePrice*(9/100));
  let SGST=Math.floor(basePrice*(9/100));
  let DeliverFee=300;
  let TotalPrice=basePrice+CGST+SGST+DeliverFee;

  function cartItemRemove(id) {
    const updatedCart = gotocart.filter((p) => p !== id);
    const updatedCartItems = items.filter((p) => p.id !== id);
    localStorage.setItem(`GotoCartItem-${person.email}`,JSON.stringify(updatedCartItems));
    localStorage.setItem(`GotoCart-${person.email}`, JSON.stringify(updatedCart));
    setItems(updatedCartItems);
  }

  function cartQtyChange(id, value) {
    const updatedItems = items.map((p) =>p.id === id ? { ...p, qty: Number(value) } : p);
    localStorage.setItem(`GotoCartItem-${person.email}`,JSON.stringify(updatedItems));
    setItems(updatedItems);
  }

  function buyNow(e)
  {
    e.preventDefault();
    alert("😎 Thank You ❤");
    const person=JSON.parse(localStorage.getItem('Person'));
    localStorage.removeItem(`GotoCart-${person.email}`);
    localStorage.removeItem(`GotoCartItem-${person.email}`);;
    navigate('/product', { replace: true });
  }

  return (
    <>
    <ul className="card">
      {items.map((p) => (
        <li key={p.id} className="cardList">
          <div>
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <h5>{p.deliveryDay}</h5>
          <h5>
            <s>${p.actualRate}</s> <strong>${p.offerRate}</strong> offer:{p.discountPercentage}%
          </h5>
          </div>
          <div>
            <input type="number"value={p.qty} min={1}onChange={(e) => cartQtyChange(p.id, e.target.value)}/>
            <button onClick={() => cartItemRemove(p.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
    <table>
      <thead>
        <tr>
          <th colSpan={2}><h3>Price Break Down</h3></th>
        </tr>
      </thead>
      <tbody>
        <tr></tr>
        <tr>
          <th>Base Price:</th>
          <td>{basePrice}</td>
        </tr>
        <tr>
          <th>CGST (9%):</th>
          <td>{CGST}</td>
        </tr>
        <tr>
          <th>SGST (9%):</th>
          <td>{SGST}</td>
        </tr>
        <tr>
          <th>Delivery Fee:</th>
          <td>{DeliverFee}</td>
        </tr>
        <tr></tr>
        <tr>
          <th>Total Price:</th>
          <td>{TotalPrice}</td>
        </tr>
      </tbody>
    </table>
    <button className="cardBuyNow" onClick={buyNow}>BuyNow</button>
    </>
  );
}

export default Cart;
