export default function BookingSummary({
  bus,
  seats,
}) {
  const total =
    seats.length *
    bus.price;

  return (
    <div>
      <h3>Summary</h3>

      <p>
        Seats:
        {seats.join(", ")}
      </p>

      <p>
        Total: ₹
        {total}
      </p>
    </div>
  );
}