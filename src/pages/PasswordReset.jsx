import "./login.css";
import { useState } from "react";
import { replace, useNavigate } from "react-router-dom";

function PasswordReset() {
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [isreset, setisRest] = useState(false);
  const [pwd1, setpwd1] = useState("");
  const [pwd2, setpwd2] = useState("");
  const navigate=useNavigate();

  // Get users safely
  const raw = JSON.parse(localStorage.getItem("Users"));
  const users = Array.isArray(raw) ? raw : raw ? [raw] : [];

  const isPasswordReset = () => {
    const verifyUser = users.find(
      (u) =>
        u.email?.trim().toLowerCase() === email.trim().toLowerCase() &&
        String(u.contact).trim() === String(contact).trim()
    );

    if (verifyUser) {
      setisRest(true);
    } else {
      alert("User ID or Contact Number Mismatched");
    }
  };

  const passwordValidate = () => {
    if (pwd1 !== pwd2) {
      alert("Passwords must match");
      return;
    }

    const updatedUsers = users.map((u) =>
      u.email === email ? { ...u, password: pwd1 } : u
    );

    localStorage.setItem("Users", JSON.stringify(updatedUsers));
    alert("Password reset successful");
    navigate('/login',{replace:true})
  };

  return (
    <>
      {!isreset && (
        <main className="container">
          <div className="main1">
            <div className="contentGrid">
              <label>Email-ID</label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="contentGrid">
              <label>Contact Number</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <button onClick={isPasswordReset} className="containerBtn">
              Submit
            </button>
          </div>
        </main>
      )}

      {isreset && (
        <main className="container">
          <div className="main1">
            <div className="contentGrid">
              <label>New Password</label>
              <input
                type="password"
                value={pwd1}
                onChange={(e) => setpwd1(e.target.value)}
              />
            </div>

            <div className="contentGrid">
              <label>Re-Enter Password</label>
              <input
                type="password"
                value={pwd2}
                onChange={(e) => setpwd2(e.target.value)}
              />
            </div>

            {pwd1 && pwd2 && pwd1 !== pwd2 && (
              <h5 style={{ color: "red" }}>Password must match</h5>
            )}

            <button
              onClick={passwordValidate}
              className="containerBtn"
              disabled={pwd1 !== pwd2}
            >
              Reset Password
            </button>
          </div>
        </main>
      )}
    </>
  );
}

export default PasswordReset;
