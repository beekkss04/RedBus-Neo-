export default function FilterSidebar({ filters, setFilters, onClear }) {
  const update = (k, v) => {
    setFilters({
      ...filters,
      [k]: v,
    });
  };

  return (
    <div
      style={{
        background: "var(--card)",
        padding: 20,
        borderRadius: 16,
        boxShadow: "0 4px 12px rgba(0,0,0,.08)",
        position: "sticky",
        top: 90,
      }}
    >
      <h2>Filters</h2>

      <hr />

      <p>Max Price</p>

      <input
        type="range"
        min="0"
        max="2000"
        value={filters.price}
        onChange={(e) => update("price", Number(e.target.value))}
      />

      <h3>₹{filters.price}</h3>

      <hr />

      <label>
        <input
          type="checkbox"
          checked={filters.ac}
          onChange={() => update("ac", !filters.ac)}
        />
        AC
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={filters.wifi}
          onChange={() => update("wifi", !filters.wifi)}
        />
        WiFi
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={filters.usb}
          onChange={() => update("usb", !filters.usb)}
        />
        USB
      </label>

      <br />
      <br />

      <select
        value={filters.type}
        onChange={(e) => update("type", e.target.value)}
      >
        <option>All</option>
        <option>Sleeper</option>
        <option>Semi-Sleeper</option>
        <option>Seater</option>
      </select>

      <br />
      <br />

      <button onClick={onClear}>Reset Filters</button>
    </div>
  );
}
