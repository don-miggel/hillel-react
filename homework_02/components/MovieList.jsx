import MovieCard from "./MovieCard";

const MovieList = ({movies=[], setSelectedMovie}) =>{
    
    return movies.length && (
        <ul>
            { movies.map((movie)=>(
                <li key={movie.id}>
                    <MovieCard 
                        movie = {movie}
                        setSelectedMovie={setSelectedMovie} />
                </li>
            )) 
        }
        </ul> 
    )
}

export default MovieList;