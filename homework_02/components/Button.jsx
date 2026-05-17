
const Button =({ movie,setSelectedMovie})=>{
    return  (
        <button onClick={()=> setSelectedMovie(movie)}>Select</button>
    )
}

export default Button
