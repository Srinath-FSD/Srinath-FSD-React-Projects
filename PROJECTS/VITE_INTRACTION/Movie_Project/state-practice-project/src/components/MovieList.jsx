import { useState } from "react";

function MovieList() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Leo", watched: false },
    { id: 2, title: "Jailer", watched: false },
    { id: 3, title: "Vikram", watched: false }
  ]);

  const toggleWatched = (id) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id
        ? { ...movie, watched: !movie.watched }
        : movie
    );

    setMovies(updatedMovies);
  };

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <span>
            {movie.title} {movie.watched && "(Watched)"}
          </span>

          <button onClick={() => toggleWatched(movie.id)}>
            Mark Watched
          </button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
