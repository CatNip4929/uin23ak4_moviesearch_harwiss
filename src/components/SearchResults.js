import { useState } from "react"
import MovieCard from "./MovieCard"

export default function SearchResults({  movies}){
    const [searchString, setSearchString] = useState("")
    
    let searchHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearchString(lowerCase)
    }

    const filteredData = movies?.filter((item)  => {
       if (searchString.length > 2) {
        return item?.Title.toLowerCase().includes(searchString);
       } return (
        <MovieCard />
       )
    })
        
  
    return(
        <>
    <nav className="nav-search">
            <h1>Movie Search</h1>
            <input label="Search" onChange={searchHandler} placeholder="search..."></input>
    </nav>
     <main>
    {searchString.length === 0 ? movies?.map((item, index) =>(
        <MovieCard key={index} Poster={item.Poster} Title={item.Title} Year={item.Year} imdbID={item.imdbID} />
    )) :  filteredData?.map((item, index) => (
        <MovieCard key={index} Poster={item.Poster} Title={item.Title} Year={item.Year} imdbID={item.imdbID} />   
        
    ))}
    </main>
    <footer>Footer</footer>
    </>
    )
}