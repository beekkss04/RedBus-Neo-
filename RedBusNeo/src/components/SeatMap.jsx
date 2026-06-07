const occupied = [3, 8, 15, 20, 25, 30, 34];

export default function SeatMap({ selected, setSelected }) {
  const toggle = (seat) => {
    if (occupied.includes(seat)) return;

    setSelected((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat],
    );
  };

  return (
    <div>
      <h3>🚌 Interactive Seat Map</h3>

      <div
        style={{
          display: "flex",
          gap: 20,
          marginBottom: 15,
        }}
      >
        <div>🟩 Available</div>
        <div>🟧 Selected</div>
        <div>🟥 Occupied</div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 10,
          maxWidth: 400,
        }}
      >
        {Array.from({
          length: 40,
        }).map((_, i) => {
          const seat = i + 1;

          return (
            <button
              key={seat}
              onClick={() => toggle(seat)}
              disabled={occupied.includes(seat)}
              style={{
                height: 55,
                borderRadius: 10,
                border: "none",
                cursor: occupied.includes(seat) ? "not-allowed" : "pointer",
                fontWeight: "bold",
                background: occupied.includes(seat)
                  ? "#ef4444"
                  : selected.includes(seat)
                    ? "#f97316"
                    : "#22c55e",
                color: "#fff",
              }}
            >
              {seat}
            </button>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 20,
          padding: 15,
          borderRadius: 10,
          background: "rgba(0,0,0,0.05)",
        }}
      >
        <strong>Selected Seats:</strong>

        {selected.length ? ` ${selected.join(", ")}` : " None"}
      </div>
    </div>
  );
}
