import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import ServicesPage from "./containers/ServicesPage/ServicesPage";
import LocationsPage from "./containers/LocationsPage/LocationsPage";
import SignUpPage from "./containers/SignUpPage/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />

      <Route
        path="*"
        element={
          <>
            <div>ERROR 404</div>
            <div>
              Back to <Link to="/">Home Page</Link>
            </div>
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
