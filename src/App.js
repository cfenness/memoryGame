import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Body />
    </div>
  </div>
);

export default App;
