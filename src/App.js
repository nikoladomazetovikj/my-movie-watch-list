import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import {useEffect, useState} from "react";
import MoviesList from "./components/Movies/MoviesList";

function App() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?t=interstellar&apikey=${process.env.REACT_APP_API_KEY}`);
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar/>
            <Main>
                <MoviesList movies={movies}/>
            </Main>
        </>
    );
}

export default App;
