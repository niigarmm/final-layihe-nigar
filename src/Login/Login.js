import "./Login.css";
import Logo from "../Image/logo.avif";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <div className="login-cart">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="login-cart-item">
          <h2>Log In</h2>
          <p className="login-info">
            Enter your email and we'll send you a login code
          </p>
          <p>Email:</p>
          <input type="email" />
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}
