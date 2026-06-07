import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchBus from "./pages/SearchBus";
import Booking from "./pages/Booking";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search" element={<SearchBus />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/settings" element={<Settings />} />

        <Route
          path="*"
          element={
            <div
              style={{
                padding: 100,
                textAlign: "center",
              }}
            >
              404
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
