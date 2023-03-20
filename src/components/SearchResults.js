import { useState } from "react"
import MovieCard from "./MovieCard"

export default function SearchResults({  movies}){
    const [searchString, setSearchString] = useState("")
    
    let searchHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearchString(lowerCase)
    }

    const filteredData = movies?.filter((item) => {
       
        return item?.Title.toLowerCase().includes(searchString);

    })
        
  
    return(
        <>
    <nav className="nav-search">
            <input label="Search" onChange={searchHandler} placeholder="search..."></input>
    </nav>
    
    {searchString.length === 0 ? movies?.map((item, index) =>(
        <MovieCard key={index} Poster={item.Poster} Title={item.Title} Year={item.Year} imdbID={item.imdbID} />
    )) :  filteredData?.map((item, index) => (
        <MovieCard key={index} Poster={item.Poster} Title={item.Title} Year={item.Year} imdbID={item.imdbID} />   
        
    ))}
    </>
    )
}