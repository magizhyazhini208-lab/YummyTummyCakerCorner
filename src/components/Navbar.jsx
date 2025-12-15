import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggle = () => setIsOpen((prev) => !prev);
  const logout = () => {
    localStorage.removeItem("Person");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div className="nav-set">
        <button className="menu-btn" onClick={toggle}>
          {isOpen ? "❌" : "🔛"}
        </button>
      </div>

      {isOpen && <div className="overlay" onClick={toggle}></div>}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={() => { navigate("/product"); toggle(); }}>
          🏠 Home
        </button>
        <button onClick={() => { navigate("/cart"); toggle(); }}>
          🛒 Cart
        </button>
        <button onClick={logout}>💤 Logout</button>
      </aside>
    </>
  );
}

export default Navbar;
