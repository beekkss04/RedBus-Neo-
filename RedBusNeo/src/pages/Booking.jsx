import { useState } from "react";
import { useApp } from "../context/AppContext";
import SeatMap from "../components/SeatMap";
import BookingStepper from "../components/BookingStepper";
import BookingSummary from "../components/BookingSummary";

export default function Booking() {
  const { selectedBus } = useApp();

  const [step, setStep] = useState(1);
  const [seats, setSeats] = useState([]);

  const [passenger, setPassenger] = useState({
    name: "",
    age: "",
    gender: "Male",
  });

  if (!selectedBus) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>No Bus Selected</h2>
      </div>
    );
  }

  const total = seats.length * selectedBus.price;

  const confirmBooking = () => {
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

    const booking = {
      id: "RB" + Date.now(),
      bus: selectedBus.name,
      passenger: passenger.name,
      seats,
      total,
      date: new Date().toLocaleString(),
    };

    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert(`Booking Confirmed!\nBooking ID: ${booking.id}`);
  };

  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <h1>🎫 Booking</h1>

      <BookingStepper step={step} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 25,
        }}
      >
        <div>
          {step === 1 && (
            <>
              <SeatMap selected={seats} setSelected={setSeats} />

              <br />

              <button onClick={() => setStep(2)} disabled={!seats.length}>
                Next →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h3>Passenger Details</h3>

              <input
                placeholder="Name"
                value={passenger.name}
                onChange={(e) =>
                  setPassenger({
                    ...passenger,
                    name: e.target.value,
                  })
                }
              />

              <br />
              <br />

              <input
                type="number"
                placeholder="Age"
                value={passenger.age}
                onChange={(e) =>
                  setPassenger({
                    ...passenger,
                    age: e.target.value,
                  })
                }
              />

              <br />
              <br />

              <select
                value={passenger.gender}
                onChange={(e) =>
                  setPassenger({
                    ...passenger,
                    gender: e.target.value,
                  })
                }
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              <br />
              <br />

              <button onClick={() => setStep(1)}>← Back</button>

              <button onClick={() => setStep(3)} disabled={!passenger.name}>
                Next →
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <BookingSummary bus={selectedBus} seats={seats} />

              <button onClick={() => setStep(2)}>← Back</button>

              <button onClick={confirmBooking}>Confirm Booking</button>
            </>
          )}
        </div>

        <div
          style={{
            padding: 20,
            background: "var(--card)",
            borderRadius: 16,
            boxShadow: "0 4px 12px rgba(0,0,0,.15)",
          }}
        >
          <h3>💰 Live Fare</h3>

          <p>Seats Selected: {seats.length}</p>

          <p>Price Per Seat: ₹{selectedBus.price}</p>

          <h2>₹{total}</h2>
        </div>
      </div>
    </div>
  );
}
