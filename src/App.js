import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import {useEffect, useState} from "react";
import MoviesList from "./components/Movies/MoviesList";
import InitialScreen from "./components/Main/InitialScreen";

function App() {

    const [movies, setMovies] = useState([]);

    const [name, setName] = useState('');

    function handleNameChange(name) {
        setName(name);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?s=${name}&apikey=${process.env.REACT_APP_API_KEY}`);
                const data = await response.json();
                setMovies(data.Search);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchData();
    }, [name]);

    return (
        <>
            <Navbar/>
            <Main onNameChange={handleNameChange}  name={name}>
                {movies && <MoviesList movies={movies}/>}
                {!movies && <InitialScreen/>}
            </Main>
        </>
    );
}

export default App;
