export default function BookingStepper({
  step,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 15,
        marginBottom: 20,
      }}
    >
      {[
        "Seats",
        "Passenger",
        "Payment",
      ].map((x, i) => (
        <div
          key={x}
          style={{
            padding: 10,
            background:
              step === i + 1
                ? "#D85A30"
                : "#ddd",
          }}
        >
          {x}
        </div>
      ))}
    </div>
  );
}