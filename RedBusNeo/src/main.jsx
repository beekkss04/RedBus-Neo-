import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./components/ErrorBoundary";
import PerformanceTracker from "./components/PerformanceTracker";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <ErrorBoundary>
        <App />
        <PerformanceTracker />
      </ErrorBoundary>
    </AppProvider>
  </React.StrictMode>,
);
