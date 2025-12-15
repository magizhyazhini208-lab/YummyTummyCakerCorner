import { useState } from "react";
import products from "../data/product";
import { useNavigate } from "react-router-dom";
function ProductList() {
  const navigate=useNavigate();
    const person=JSON.parse(localStorage.getItem('Person'));
    const gotocart=JSON.parse(localStorage.getItem(`GotoCart-${person.email}`))||[];
    const gotocartitem=JSON.parse(localStorage.getItem(`GotoCartItem-${person.email}`))||[];
    const [state,setState]=useState(gotocart);
    const cartHandle=(id)=>{
      if(gotocart.includes(id))
      {
        navigate('/cart', { replace: true });
      }
      else
      {
        gotocart.push(id)
        gotocartitem.push(products.find((p) =>(p.id===id)));
        localStorage.setItem(`GotoCart-${person.email}`,JSON.stringify([...gotocart]));
        localStorage.setItem(`GotoCartItem-${person.email}`,JSON.stringify([...gotocartitem]));
        setState(gotocart);
      }
    }
  return (
    <>
    <h1>Yummy Tummy!!!😍</h1>
    <ul className='card'>
      {products.map((p) => (
        <li key={p.id} className="cardList">
          <div onClick={()=>{navigate(`/product/${p.id}`)}}>
              <img src={p.image}/>
              <h3> {p.name}</h3>
              <h4>{p.shortDescription}</h4>
              <h5><s>${p.actualRate}</s> <strong>${p.offerRate}</strong> offer:{p.discountPercentage}%</h5>
          </div>
          <div>
              <button onClick={()=>cartHandle(p.id)}>{state.includes(p.id)?'GotoCart':'AddtoCart'}</button>
          </div>
        </li>
      ))}
    </ul>
    </>
  );
}
export default ProductList;
