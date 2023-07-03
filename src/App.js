import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import {useEffect, useState} from "react";
import MoviesList from "./components/Movies/MoviesList";

function App() {

    const [movies, setMovies] = useState([]);

    const [name, setName] = useState('');

    function handleNameChange(name) {
        setName(name);
    }

    function handleOnSubmit() {
        setName('');
    }

    console.log(name)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?s=interstellar&apikey=${process.env.REACT_APP_API_KEY}`);
                const data = await response.json();
                setMovies(data.Search);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar/>
            <Main onNameChange={handleNameChange} onSubmit={handleOnSubmit} name={name}>
                <MoviesList movies={movies}/>
            </Main>
        </>
    );
}

export default App;
