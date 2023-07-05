import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import {useEffect, useState} from "react";
import MoviesList from "./components/Movies/MoviesList";
import InitialScreen from "./components/Main/InitialScreen";
import Alert from "./components/Layouts/Alert";
import MyMovieList from "./components/Movies/MyMovieList";

function App() {

    const [movies, setMovies] = useState([]);

    const [name, setName] = useState('');

    const [error, setError] = useState('');

    const [showError, setShowError] = useState(false);

    const [myMovies, setMyMovies] = useState([]);

    function handleOnAddToWatchList(object) {
        setMyMovies([...myMovies, object]);
    }


    function handleNameChange(name) {
        setName(name);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?s=${name}&apikey=${process.env.REACT_APP_API_KEY}`);
                const data = await response.json();
                setError('');
                setMovies(data.Search);
            } catch (error) {
               setError('Cannot Fetch Movies')
            }
        };

        fetchData();
    }, [name]);

    useEffect(() => {
        setShowError(!!error);
    }, [error]);


    console.log('my movies', myMovies);
    return (
        <>
            <Navbar/>
            {showError && <Alert error={error}/>}
            <Main onNameChange={handleNameChange}  name={name}>
                {movies && <MoviesList movies={movies} onAdd={handleOnAddToWatchList}/>}
                <MyMovieList myMovies={myMovies} />
                {!movies && <InitialScreen/>}
            </Main>
        </>
    );
}

export default App;
