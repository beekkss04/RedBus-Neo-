import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      error: true,
    };
  }

  render() {
    if (
      this.state.error
    ) {
      return (
        <div
          style={{
            padding: 100,
            textAlign:
              "center",
          }}
        >
          <h1>
            ⚠ Application
            Error
          </h1>

          <button
            onClick={() =>
              window.location.reload()
            }
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}