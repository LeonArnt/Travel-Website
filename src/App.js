import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import ServicesPage from "./containers/ServicesPage/ServicesPage";
import LocationsPage from "./containers/LocationsPage/LocationsPage";
import SignUpPage from "./containers/SignUpPage/SignUpPage";
import PlacePage from "./containers/PlacePage/PlacePage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/locations" element={<LocationsPage />} />
      <Route index path="/sign-up" element={<SignUpPage />} />
      <Route path="/place/:id" element={<PlacePage />} />

      <Route
        path="*"
        element={
          <>
            <div>ERROR 404</div>
            <div>
              Back to <Link to={"/sign-up"}>LogIn Page</Link>
            </div>
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
