import {
  useEffect,
  useState,
} from "react";

export default function PerformanceTracker() {
  const [ms, setMs] =
    useState(0);

  useEffect(() => {
    const start =
      performance.now();

    setTimeout(() => {
      setMs(
        Math.round(
          performance.now() -
            start
        )
      );
    }, 500);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        padding: 10,
        background: "#222",
        color: "#fff",
        borderRadius: 10,
        zIndex: 999,
      }}
    >
      ⚡ {ms}ms
    </div>
  );
}