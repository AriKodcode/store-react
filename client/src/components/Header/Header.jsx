import { useNavigate } from "react-router-dom";
import "./Header.css";
export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">
        <h2>Zustand Demo</h2>
        <h1>Starter Store</h1>
      </div>
      <div className="bth">
        <button
          className="shop"
          onClick={() => {
            navigate("/");
          }}
        >
          Shop
        </button>
        <button
          className="cart"
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart
        </button>
      </div>
    </header>
  );
}
