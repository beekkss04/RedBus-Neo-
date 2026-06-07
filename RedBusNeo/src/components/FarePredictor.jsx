export default function FarePredictor({
  price,
}) {
  const next = Math.round(price * 1.1);

  return (
    <div
      style={{
        padding: 12,
        borderRadius: 10,
        background: "rgba(216,78,85,.15)",
        color: "var(--text)",
        fontWeight: 600,
      }}
    >
      📈 Predicted Fare Next Week:
      ₹{next}
    </div>
  );
}