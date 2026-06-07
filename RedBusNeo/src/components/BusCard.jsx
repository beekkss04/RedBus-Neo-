import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import FarePredictor from "./FarePredictor";

export default function BusCard({ bus }) {
  const navigate = useNavigate();

  const { setSelectedBus } = useApp();

  return (
    <div
      style={{
        background: "var(--card)",
        borderRadius: 18,
        padding: 20,
        marginBottom: 20,
        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2
  style={{
    color:
      "var(--primary)",
    margin: 0,
  }}
>
  ₹ {bus.price}
</h2>

          <p>⭐ {bus.rating}</p>
        </div>

        <div>
          <h2>₹ {bus.price}</h2>
        </div>
      </div>

      <hr />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 15,
          marginTop: 15,
        }}
      >
        <div>
          <strong>Departure</strong>
          <br />
          {bus.dep}
        </div>

        <div>
          <strong>Arrival</strong>
          <br />
          {bus.arr}
        </div>

        <div>
          <strong>Duration</strong>
          <br />
          {bus.dur}
        </div>

        <div>
          <strong>Seats</strong>
          <br />
          {bus.seats}
        </div>
      </div>

      <br />

      <div>
        📍 {bus.from} → {bus.to}
      </div>

      <br />

      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        {bus.ac && <span>❄ AC</span>}

        {bus.wifi && <span>📶 WiFi</span>}

        {bus.usb && <span>🔌 USB</span>}

        <span>🛏 {bus.type}</span>
      </div>

      <br />

      <FarePredictor price={bus.price} />

      <button
        onClick={() => {
          setSelectedBus(bus);

          navigate("/booking");
        }}
      >
        Book Now
      </button>
    </div>
  );
}
