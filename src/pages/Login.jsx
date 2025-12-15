import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
function Login() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [capInput, setCapInput] = useState("");
  const chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*?";
  const passwordReset=()=>
  {
    navigate("/login/reset");
  }
  const generateCaptcha = () => {
    let result = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCapInput("");
  };

  function validate(type) {
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    if (type === "login") {
      if (capInput !== captcha) {
        alert("Captcha Incorrect");
        refreshCaptcha();
        return;
      }

      const verifyUser = users.find(
        (item) => item.email === email && item.password === pwd
      );

      if (verifyUser) {
        const UserData = { email, password: pwd };
        localStorage.setItem("Person", JSON.stringify(UserData));
        navigate("/product");
      } else {
        alert("UserName or Password MisMatched");
        refreshCaptcha();
      }
    }
    else {
      const verify = users.find((item) => item.email === email);
      if (verify) {
        alert("UserName Already Exists");
        return;
      }
      const NewUserData = {name,dob,contact,email,password: pwd,};
      users.push(NewUserData);
      const UserData = { email, password: pwd };
      localStorage.setItem("Users", JSON.stringify(users));
      localStorage.setItem("Person", JSON.stringify(UserData));
      navigate("/product");
    }
  }

  return (
    <>
      {toggle && (
        <main className="container">
          <div className="main1">
              <h1>Have not register yet!!!</h1>
              <h5>Let's Register Now</h5>
              <button onClick={() => setToggle(false)} className="containerBtn">SignUp</button>
          </div>   
          <div className="main4">
              <div className="header">
                <h1>User Login</h1>
              </div>
              <div className="content">
                  <form onSubmit={(e) => {e.preventDefault(); validate("login");}}>
                    <div  className="contentGrid">
                      <label>Email-ID</label>
                      <input type="email" name="userName" placeholder="abc@gmail.com" value={email}onChange={(e) => setEmail(e.target.value)}required/>
                    </div>
                      <div  className="contentGrid">
                          <label>Password</label>
                         <input type="password" placeholder="********" value={pwd} onChange={(e) => setPwd(e.target.value)}required/>
                      </div>
                      <div  className="contentGrid">
                        <label>Captcha:<strong>{captcha}</strong>
                        <button onClick={refreshCaptcha}>🔄</button>
                        </label>
                      </div>
                      <div  className="contentGrid">
                        <input type="text"placeholder="Enter Captcha"value={capInput}onChange={(e) => setCapInput(e.target.value)}required/>
                        <h5 style={{color:'blue'}} onClick={passwordReset}>forgetPassword</h5>
                      </div>
                      <div>
                          <button type="submit" className="containerBtn">Login</button>
                      </div>
                      </form>
                  </div>
                </div>
            </main>)}
      {!toggle && (
        <main className="container">
          <div className="main2">
              <div className="header">
                  <h1>Register</h1>
              </div>
              <div>
                <form onSubmit={(e) => {e.preventDefault();validate("signup");}}>
                  <div className="contentGrid">
                    <label>UserName</label>
                    <input type="text"value={name}onChange={(e) => setName(e.target.value)}required/>
                  </div>
                  <div className="contentGrid">
                    <label>UserName</label>
                    <input type="text"value={name}onChange={(e) => setName(e.target.value)}required/>
                  </div>
                  <div className="contentGrid">
                    <label>Contact Number</label>
                  <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required/>
                  </div>
                  <div className="contentGrid">
                      <label>Mail-Id</label>
                  <input type="email"value={email}onChange={(e) => setEmail(e.target.value)}required/>
                  </div>
                  <div className="contentGrid">
                    <label>Password</label>
                  <input type="password" value={pwd}onChange={(e) => setPwd(e.target.value)}required/>
                  </div>
                  <div>
                    <button className="containerBtn">SignUp</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="main3">
                <h1>Already Have an Account!!!</h1>
                <h5>Just Login</h5>
                <button onClick={() => setToggle(true)} className="containerBtn">LogIn</button>
            </div>
        </main>
      )}
    </>
  );
}
export default Login;
