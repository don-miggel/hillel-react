import { useState } from 'react'
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';

const allMovies = [
  { id: 1, title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 8.8 },
  { id: 2, title: 'The Dark Knight', year: 2008, genre: 'Action', rating: 9.0 },
  { id: 3, title: 'Interstellar', year: 2014, genre: 'Sci-Fi', rating: 8.6 },
  { id: 4, title: 'Parasite', year: 2019, genre: 'Thriller', rating: 8.5 },
  { id: 5, title: 'The Matrix', year: 1999, genre: 'Sci-Fi', rating: 8.7 },
  { id: 6, title: 'Joker', year: 2019, genre: 'Drama', rating: 8.4 },
  { id: 7, title: 'Avengers: Endgame', year: 2019, genre: 'Action', rating: 8.4 },
  { id: 8, title: 'Whiplash', year: 2014, genre: 'Drama', rating: 8.5 },
];

function App() {

  const [movies, setMovies] = useState(allMovies);
  const[selectedMovie , setSelectedMovie] = useState(null);
  
  return (
    <>
      <MovieList movies={movies}  setSelectedMovie={setSelectedMovie}/>
      { selectedMovie && <MovieDetails selectedMovie={selectedMovie} />}
    </>
  )
}

export default App
