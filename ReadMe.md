# RedBus Neo+

## Problem Statement

Build a smooth website for booking bus tickets between cities.
The application should provide seat selection, filtering, booking workflow,
live fare updates, settings management and performance tracking. 

Deployed Link :- https://red-bus-neo.netlify.app/

---

## Objectives

- Search buses between cities
- Filter buses quickly
- Select seats interactively
- Track fare updates in real time
- Manage application settings
- Handle errors gracefully
- Monitor performance

---

## System Architecture

User
 ↓
React Router
 ↓
Pages
 ├─ Home
 ├─ Search
 ├─ Booking
 └─ Settings
 ↓
Components
 ↓
Context API
 ↓
JSON Data + LocalStorage

---

## Features Implemented

### Mandatory Features

1. Interactive Seating Map
2. Easy Filter Sidebar
3. Multi-Step Booking Process
4. Smooth Scrolling Bus List
5. Live Price Update
6. App-Wide Settings
7. Graceful Error Handling
8. Speed Tracker

### Additional Features

1. Fare Predictor
2. Recent Routes Tracker

---

## React Concepts Used

- Functional Components
- Hooks
- useState
- useEffect
- Context API
- React Router
- Error Boundaries
- Local Storage

---

## Implementation Approach

The application uses React components for each feature.
Global settings are managed using Context API.
Bus data is stored in JSON files.
Recent routes and bookings are persisted using Local Storage.

---

## Execution Steps

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

---

## Results

The system successfully performs:

- Bus search
- Filtering
- Seat selection
- Booking workflow
- Fare prediction
- Theme switching
- Performance monitoring

---

## Conclusion

RedBus Neo+ demonstrates a complete React-based booking application
implementing routing, state management, reusable components,
error handling and performance tracking.
