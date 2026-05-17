
const MovieDetails=({selectedMovie})=>{
    return (
        <>
            <br />
            <p>title: {selectedMovie.title}</p>
            <p>year: {selectedMovie.year}</p>
            <p>genre: {selectedMovie.genre}</p>
            <p>rating: {selectedMovie.rating}</p>
        </>
    );
}

export default MovieDetails