import { useState } from "react";

const routes =
  JSON.parse(
    localStorage.getItem(
      "routes"
    ) || "[]"
  );

localStorage.setItem(
  "routes",
  JSON.stringify(
    routes.slice(0, 5)
  )
);
export default function SearchForm({
  onSearch,
}) {
  const [from, setFrom] =
    useState("");

  const [to, setTo] =
    useState("");

  const [date, setDate] =
    useState("");

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const clear = () => {
    setFrom("");
    setTo("");
    setDate("");
  };

  const submit = () => {
    if (!from || !to) {
      alert(
        "Please enter source and destination"
      );
      return;
    }

    const routes =
      JSON.parse(
        localStorage.getItem(
          "routes"
        ) || "[]"
      );

    routes.unshift(
      `${from} → ${to}`
    );

    localStorage.setItem(
      "routes",
      JSON.stringify(
        routes.slice(0, 5)
      )
    );

    onSearch({
      from,
      to,
      date,
    });
  };

  return (
    <div
      style={{
        padding: 20,
        border:
          "1px solid #ddd",
        borderRadius: 12,
        marginBottom: 20,
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
      }}
    >
      <input
        placeholder="From"
        value={from}
        onChange={(e) =>
          setFrom(
            e.target.value
          )
        }
      />

      <button
        onClick={swap}
      >
        ⇄
      </button>

      <input
        placeholder="To"
        value={to}
        onChange={(e) =>
          setTo(
            e.target.value
          )
        }
      />

      <input
        type="date"
        value={date}
        onChange={(e) =>
          setDate(
            e.target.value
          )
        }
      />

      <button
        onClick={submit}
      >
        Search
      </button>

      <button
        onClick={clear}
      >
        Clear
      </button>
    </div>
  );
}