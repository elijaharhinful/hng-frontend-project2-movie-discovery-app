import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeaturedMovie from "./components/FeaturedMovie";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
      
    </div>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <FeaturedMovie />
      <Footer />
    </div>
  );
}

export default App;
