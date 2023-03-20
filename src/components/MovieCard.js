export default function MovieCard({ Title, Year, imdbID, Poster}){
    return(
        <article className="movie-card">
            <img src={Poster} alt={Title} />
            <h3>{Title}</h3>
            <p>{Year}</p>
            <p>{imdbID}</p>
        </article>
    )
}