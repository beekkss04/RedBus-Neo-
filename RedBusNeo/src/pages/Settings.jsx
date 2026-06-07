import { useApp } from "../context/AppContext";
import CurrencySelector from "../components/CurrencySelector";

export default function Settings() {
  const { darkMode, toggleDark, currency } = useApp();

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "40px auto",
        background: "var(--card)",
        padding: 30,
        borderRadius: 16,
        boxShadow: "var(--shadow)",
      }}
    >
      <h1>⚙ Settings</h1>

      <hr />

      <h3>Theme</h3>

      <button onClick={toggleDark}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <hr />

      <h3>Currency</h3>

      <CurrencySelector />

      <p>Current: {currency}</p>

      <hr />

      <h3>Email Alerts</h3>
      <input type="checkbox" defaultChecked />

      <h3>SMS Alerts</h3>
      <input type="checkbox" />

      <h3>Compact Mode</h3>
      <input type="checkbox" />
    </div>
  );
}
