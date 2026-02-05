import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";

// NavBar with active link styling
function NavBar() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/shop", label: "Shop" },
  ];

  return (
    <nav
      style={{
        padding: "16px",
        borderBottom: "1px solid #eee",
        marginBottom: "24px",
        display: "flex",
        gap: "16px",
      }}
    >
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#0070f3" : "#333",
            fontWeight: isActive ? "600" : "400",
          })}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
