import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeaturedMovie from "./components/FeaturedMovie";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <FeaturedMovie />

      <Routes>
        <Route path="/" element={<MovieCard />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
