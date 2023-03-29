export default function MovieCard({  Year, imdbID, Poster, Title}){
    //Hvis Poster ikke har bilde erstatt Poster = URL
    if(Poster === "N/A") {Poster = "https://via.placeholder.com/200x200?text=no+image+XD+men+ok"} 
    return(
        <article className="movie-card">
            <h3>{Title}</h3>
            <img src={Poster} alt={Title} />
            <p>{Year}</p>
            <p>{imdbID}</p>
        </article>
    )
}