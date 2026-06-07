import { useState } from "react";
import BusCard from "./BusCard";

export default function BusList({
  buses,
}) {
  const [visible, setVisible] =
    useState(5);

  if (!buses.length) {
    return <div>No buses</div>;
  }

  return (
  <div
    style={{
      maxHeight: "650px",
      overflowY: "auto",
      paddingRight: 10,
    }}
  >
    {buses
      .slice(0, visible)
      .map((b) => (
        <BusCard
          key={b.id}
          bus={b}
        />
      ))}

    {visible <
      buses.length && (
      <button
        onClick={() =>
          setVisible(
            (v) =>
              v + 5
          )
        }
      >
        Load More
      </button>
    )}
  </div>
);}