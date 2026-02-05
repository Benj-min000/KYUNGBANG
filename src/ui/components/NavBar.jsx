import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      style={{
        marginBottom: "24px",
        display: "flex",
        gap: "16px",
        borderBottom: "1px solid #eee",
        paddingBottom: "12px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/product">Product</Link>
    </nav>
  );
}
