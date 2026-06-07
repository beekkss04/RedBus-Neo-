import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import buses from "../data/buses.json";
import SearchForm from "../components/SearchForm";
import FilterSidebar from "../components/FilterSidebar";
import BusList from "../components/BusList";

export default function SearchBus() {
  const { searchQuery } = useApp();

  const [query, setQuery] = useState(searchQuery);

  const [results, setResults] = useState([]);

  const [filters, setFilters] = useState({
    price: 2000,
    ac: false,
    wifi: false,
    usb: false,
    type: "All",
  });

  const apply = (q, f) => {
  setResults(
    buses.filter((b) => {
      if (
        q.from &&
        b.from !== q.from
      )
        return false;

      if (
        q.to &&
        b.to !== q.to
      )
        return false;

      if (
        b.price > f.price
      )
        return false;

      if (
        f.ac &&
        !b.ac
      )
        return false;

      if (
        f.wifi &&
        !b.wifi
      )
        return false;

      if (
        f.usb &&
        !b.usb
      )
        return false;

      if (
        f.type !==
          "All" &&
        b.type !==
          f.type
      )
        return false;

      return true;
    })
  );
};
  useEffect(() => {
    apply(query, filters);
  }, [query, filters]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Search Bus</h1>

      <SearchForm onSearch={setQuery} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: 20,
        }}
      >
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          onClear={() =>
            setFilters({
              price: 2000,
              ac: false,
              wifi: false,
              usb: false,
              type: "All",
            })
          }
        />

        <BusList buses={results} />
      </div>
    </div>
  );
}