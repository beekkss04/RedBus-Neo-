import { NavLink, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const {
    darkMode,
    toggleDark,
    currency,
  } = useApp();

  const navigate = useNavigate();

  return (
    <nav
      style={{
        height: 70,
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        background: "var(--card)",
        borderBottom:
          "1px solid var(--border)",
        gap: 20,
        boxShadow:
          "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <div
        onClick={() =>
          navigate("/")
        }
        style={{
          fontSize: 28,
          fontWeight: 800,
          color: "var(--primary)",
          cursor: "pointer",
          marginRight: 20,
        }}
      >
        🚌 RedBus Neo+
      </div>

      {[
        ["/", "Home"],
        ["/search", "Search"],
        ["/booking", "Booking"],
        ["/settings", "Settings"],
      ].map(([to, label]) => (
        <NavLink
          key={to}
          to={to}
          style={({ isActive }) => ({
            textDecoration:
              "none",
            fontWeight: 600,
            color: isActive
              ? "var(--primary)"
              : "var(--text)",
          })}
        >
          {label}
        </NavLink>
      ))}

      <div
        style={{
          marginLeft: "auto",
        }}
      >
        💱 {currency}
      </div>

      <button
        onClick={toggleDark}
      >
        {darkMode
          ? "☀"
          : "🌙"}
      </button>
    </nav>
  );
}