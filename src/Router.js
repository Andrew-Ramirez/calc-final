import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Random from "./Random";
import Home from "./Home";

export default function MyRouter() {
  // const[appName, setAppName] = useContext(AppInfo);

  return (
    <Router basename="/">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calc">Calc</Link>
        </li>
        <li>
          <Link to="/random">Random</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calc" element={<App />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </Router>
  );
}
