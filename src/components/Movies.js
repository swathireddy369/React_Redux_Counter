import { useState } from "react";
import AddMovie from "./AddMovie";
export default function Movies() {
  let [movies, setMovies] = useState(["KGF", "MR.perfect", "Salar"]);
  let [newMovie, setNewMovie] = useState("");
  const handleChange = (e) => {
    newMovie = e.target.value;
    setNewMovie(newMovie);
  };
  const addNewMovie = () => {
    // movies.push(newMovie);
    let latestMovies = [...movies, newMovie];
    setMovies(latestMovies);
    setNewMovie("");
  };
  return (
    <>
      <ul>movies</ul>
      {movies.map((movie, i) => {
        return (
          <li key={i} style={{ listStyle: "none" }}>
            {movie}
          </li>
        );
      })}
      <AddMovie
        newMovie={newMovie}
        handleChange={handleChange}
        addNewMovie={addNewMovie}
      />
    </>
  );
}
