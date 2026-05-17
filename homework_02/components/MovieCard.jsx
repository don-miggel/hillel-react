import Button from "./Button";

const MovieCard=({movie, setSelectedMovie}) =>{
    return (
        <div className="movie-card">
          <span><b>{movie.title}</b> ({movie.year})</span>
          <span> — {movie.genre}, </span>
          <span>⭐ {movie.rating} </span>
          <Button movie={movie} setSelectedMovie={setSelectedMovie} />
        </div>);
}

export default MovieCard;