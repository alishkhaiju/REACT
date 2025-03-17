import { useEffect, useState } from "react"
import './movies.css';


const MovieCard = ({ movieData }) => {
    return (
        <>
            <div className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={movieData.title} className="movie-poster" />

                <div className="movie-details">
                    <h2 className="movie-title">{movieData.title}</h2>
                    <p className="movie-overview">{movieData.overview}</p>
                    <p className="movie-release">Release Date: {movieData.release_date}</p>
                    <p className="movie-rating">Rating: {movieData.vote_average}</p>
                    <p className="movie-popularity">Popularity: {movieData.popularity}</p>
                </div>
            </div>
        </>
    )
}

const Movies = () => {
    const [movieList, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8049c19d4f7b3d6b01f7502cd306ce0");
                const moviesData = await response.json();
                console.log(moviesData.page);
                console.log(moviesData.results);
                setMovies(moviesData.results);

            } catch (e) {
                console.log("Error loading movies", e);
            }
        }

        fetchData();

    }, [])


    return (
        <>
            <h1>Movies</h1>
            {
                movieList.length !== 0 ?
                    <div className="movie-container">
                        {
                            movieList.map((movie) => {
                                return (
                                    <MovieCard movieData={movie} />
                                )
                            })
                        }
                    </div>
                    : <>
                        <h1>No Data Found!!</h1>
                    </>
            }
        </>
    )
}

export default Movies