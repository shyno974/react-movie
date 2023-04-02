import React, { useEffect, useState } from "react";
import Headerlink from "../components/Headerlink";
import Moviecard from "../components/Moviecard";
import axios from "axios";

const Accueil = () => {
  let [movies, setMovies] = useState([]);
  let [searchInput, setSearchInput] = useState("");

  const fetchMovies = (myInput = "code") => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=9f44a50a5ee63c57193c6bee26e427bd&query=" +
          myInput +
          "&language=fr-FR"
      )
      .then((response) => setMovies(response.data.results));
  };
  useEffect(fetchMovies, []);

  const getValueInput = () => {
    fetchMovies(searchInput);
  };
  return (
    <div className="accueil-container">
      <Headerlink />
      <div className="search-container">
        <input
          type="text"
          name="searchInput"
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Entrez le titre du film"
        />
        <button className="btn-search" onClick={getValueInput}>
          Rechercher
        </button>
      </div>

      <div className="card-container">
        {movies &&
          movies.map((movie, index) => <Moviecard key={index} movie={movie} />)}
      </div>
    </div>
  );
};

export default Accueil;
