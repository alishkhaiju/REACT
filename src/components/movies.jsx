import { useEffect, useState } from "react"

const Movies = () => {
    const [movielist, setMovies] = useState([]);

    useEffect( () => {


        const fetchData = async () => {
            try {
                const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8049c19d4f7b3d6b01f7502cd306ce0");
                const moviesData = await response.json();
                console.log(moviesData.page);
                console.log(moviesData.results);
                setMovies(moviesData.results);
            } catch (e) {
            console.log("Error loading movies");
        }
    }

    fetchData();

}, [] )   
       
        

    return (
        <>
            <h1>Movies</h1>
        </>
    )
}

export default Movies