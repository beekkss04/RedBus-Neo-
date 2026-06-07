import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import buses from "../data/buses.json";
import RecentRoutes from "../components/RecentRoutes";

const routes = buses.slice(0, 8).map((b) => ({
  from: b.from,
  to: b.to,
}));

export default function Home() {
  const navigate = useNavigate();

  const { setSearchQuery } = useApp();

  const search = (from, to) => {
    setSearchQuery({
      from,
      to,
      date: new Date().toISOString().split("T")[0],
    });

    navigate("/search");
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: 1100,
        margin: "auto",
      }}
    >
      <div
        style={{
  background:
    "linear-gradient(135deg,#d84e55,#f97316)",
  padding:"4rem",
  borderRadius:25,
  color:"#fff"
}}
      >
        <h1>
          Travel smarter
          <br />
          travel faster
        </h1>

        <p>Book buses instantly</p>

        <button onClick={() => navigate("/search")}>Search →</button>
      </div>

      <br />

      <RecentRoutes />

      <div>
        <h2>Popular Routes</h2>

        {routes.map((r) => (
          <button key={r.from + r.to} onClick={() => search(r.from, r.to)}>
            {r.from} → {r.to}
          </button>
        ))}
      </div>
    </div>
  );
}
