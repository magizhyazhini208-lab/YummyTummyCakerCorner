import {Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import ProductList from "./pages/Productlist";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NavigationProtectur from "./components/NavigationProtectur";
import PasswordReset from "./pages/PasswordReset";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="*" element={<Login />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/login/reset" element={<PasswordReset />}/>
      <Route path="/product" element={<NavigationProtectur><ProductList/></NavigationProtectur>}/>
      <Route path="/product/:id" element={<NavigationProtectur><ProductDetails/></NavigationProtectur>}/>
      <Route path="/cart" element={<NavigationProtectur><Cart/></NavigationProtectur>}/>
    </Routes>
    </>
  )
}

export default App
