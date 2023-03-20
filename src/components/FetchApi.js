import { useEffect, useState } from "react"
import SearchResults from "./SearchResults"



export default function FetchApi() {
    const [movies, setMovies] = useState([])
    const [resultat, setResultat] = useState([])
    
    
    const getMovies = async() => {
        const response = await fetch('http://www.omdbapi.com/?s=james+bond&type=movie&apikey=855d4863')
        const data = await response.json()
        setMovies(data.Search)
        setResultat(movies.filter(items => items?.source?.name))

    }

    useEffect(() => {
        getMovies()
    }, [])


return (
    <>
    <SearchResults movies={movies} resultat={resultat}  />
   
    </>
)
}   