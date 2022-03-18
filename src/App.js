import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";

function App() {
  let cards = data.map(function (item) {
    return (
      <Card
      {...item}
      key={item.id}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="card-section">{cards}</section>
    </div>
  );
}

export default App;
