import {useNavigate } from "react-router-dom";
import { useState } from "react";
import './navbar.css'

function Navbar() {
  const [isOpen,setIsOpen]=useState(false);
  const clsName = isOpen ? "openSlideBar" : "closeSidebar";
  function toggle()
    {
      setIsOpen((pre)=>!pre);
    }
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem('Person');
    navigate('/login', { replace: true });
  }
  return (
    <>
      <menu className="nav-set">
        <button onClick={toggle}>{isOpen ? '❌' : '🔛'}</button>
      </menu>
      {isOpen && <div className={clsName}>
          <button  onClick={()=>{navigate("/product")}}>🏠Home</button>
          <button  onClick={()=>{navigate("/cart")}}>🛒Cart</button>
          <button  onClick={logout}>💤Logout</button>
      </div>}
    </>
  )
}

export default Navbar