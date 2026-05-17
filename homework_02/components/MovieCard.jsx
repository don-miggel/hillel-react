import Button from "./Button";

const MovieCard=({movie, setSelectedMovie}) =>{
    return (
        <>
            <b>{movie.title} </b>
             ({movie.year})
            - {movie.genre}, 
            ⭐: {movie.rating} 
            <Button movie={movie} setSelectedMovie={setSelectedMovie} />
        </>
    );
}

export default MovieCard;