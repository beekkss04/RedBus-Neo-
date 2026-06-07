import { useApp } from "../context/AppContext";

export default function CurrencySelector() {
  const {
    currency,
    setCurrency,
  } = useApp();

  return (
    <select
      value={currency}
      onChange={(e) =>
        setCurrency(
          e.target.value
        )
      }
    >
      <option>INR</option>
      <option>USD</option>
      <option>EUR</option>
    </select>
  );
}