import { useEffect, useState } from "react"
import Header from "./Header"
import MovieCard from "./MovieCard"

export default function SearchResults(){
    const [searchString, setSearchString] = useState("")
    const [moviesSearch, setMoviesSearch] = useState([])

    useEffect(() => {
       if (searchString.length > 2){
         searchMovies()
       } else {
        getDefault()
       }
    }, [searchString])
    //håndterer tekststrengen i søkefeltet å gjør om all tekst til små bokstaver. fordi Api kallet trenger tekststreng i lowerCase
    let searchHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearchString(lowerCase)
    }
    //kaller på api'et og venter på response fra searchString.
    const searchMovies = async() => {
    const response = await fetch(`http://www.omdbapi.com/?s=${searchString}&type=movie&apikey=855d4863`)
        const data = await response.json()
        setMoviesSearch(data.Search)
        
    }

    const getDefault = async() => {
        const response = await fetch('http://www.omdbapi.com/?s=james+bond&type=movie&apikey=855d4863')
        const data = await response.json()
        setMoviesSearch(data.Search)
    }
   
    return(
        <>
        <Header />
    <nav className="nav-search">
            <h2>Søk Her!</h2>
            <input label="Search" onChange={searchHandler} placeholder="search..."></input>
    </nav>
     <main>
    {moviesSearch?.map((item, index) =>(
        <MovieCard key={index} Poster={item.Poster} Title={item.Title} Year={item.Year} imdbID={item.imdbID} />
    )) 
    }
    </main>
    <footer>Footer</footer>
    </>
    )
}