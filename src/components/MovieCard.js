export default function MovieCard({  Year, imdbID, Poster, Title}){
    return(
        <article className="movie-card">
            <h2>{Title}</h2>
            <img src={Poster} alt={Title} />
            <p>{Year}</p>
            <p>{imdbID}</p>
        </article>
    )
}