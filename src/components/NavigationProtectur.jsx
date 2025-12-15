import {Navigate}  from "react-router-dom";
import Navbar from "./Navbar"
function NavigationProtectur({children}) {
    const isLoggedIn=JSON.parse(localStorage.getItem('Person'));
    if(!isLoggedIn)
    {
      return <Navigate to="/login" replace />;
    }
    else
      return (
              <>
              <Navbar/>
              <div className="mainComponents">
                  <div>{children}</div>
              </div>
              </>
      );
}
export default NavigationProtectur
