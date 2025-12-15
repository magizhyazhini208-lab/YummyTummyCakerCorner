import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*?";

  // 🔹 Generate captcha
  const generateCaptcha = () => {
    let result = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  };

  // 🔹 Generate captcha on load
  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCapInput("");
  };

  function validate(type) {
    let users = JSON.parse(localStorage.getItem("Users")) || [];

    // 🔐 CAPTCHA CHECK (only for login)
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

    // 📝 SIGNUP
    else {
      const verify = users.find((item) => item.email === email);
      if (verify) {
        alert("UserName Already Exists");
        return;
      }

      const NewUserData = {
        name,
        dob,
        contact,
        email,
        password: pwd,
      };

      users.push(NewUserData);

      const UserData = { email, password: pwd };
      localStorage.setItem("Users", JSON.stringify(users));
      localStorage.setItem("Person", JSON.stringify(UserData));
      navigate("/product");
    }
  }

  return (
    <>
      {/* LOGIN */}
      {toggle && (
        <main className="signupSection">
          <section className="sec3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                validate("login");
              }}
            >
              <h3>Login</h3>

              <label>Mail-Id</label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="********"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
              />

              <label>
                Captcha: <strong>{captcha}</strong>
                <button type="button" onClick={refreshCaptcha}>🔄</button>
              </label>

              <input
                type="text"
                placeholder="Enter Captcha"
                value={capInput}
                onChange={(e) => setCapInput(e.target.value)}
                required
              />

              <button type="submit">LogIn</button>
            </form>
          </section>

          <section className="sec4">
            <h4>Not Register Yet!!!</h4>
            <button onClick={() => setToggle(false)}>SignUp</button>
          </section>
        </main>
      )}

      {/* SIGNUP */}
      {!toggle && (
        <main className="signupSection">
          <section className="sec1">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                validate("signup");
              }}
            >
              <h3>Register</h3>

              <label>UserName</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label>DOB</label>
              <input
                type="text"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />

              <label>Contact Number</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />

              <label>Mail-Id</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>Password</label>
              <input
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
              />

              <button type="submit">SignUp</button>
            </form>
          </section>

          <section className="sec2">
            <h4>Already Have an account</h4>
            <button onClick={() => setToggle(true)}>LogIn</button>
          </section>
        </main>
      )}
    </>
  );
}

export default Login;
