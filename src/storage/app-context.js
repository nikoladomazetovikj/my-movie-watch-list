import React, { useEffect, useState } from "react";

const AppContext = React.createContext({
    movies: [],
    name: "",
    error: "",
    showError: false,
    myMovies: [],
    handleOnAddToWatchList: () => {},
    handleRemoveFromWatchList: () => {},
    handleNameChange: () => {},
});

export const AppProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);
    const [myMovies, setMyMovies] = useState([]);

    function handleOnAddToWatchList(object) {
        const objectExist = myMovies.some((movie) => movie.imdbID === object.imdbID);

        if (!objectExist) setMyMovies([...myMovies, object]);
    }

    function handleRemoveFromWatchList(object) {
        const updatedMovies = myMovies.filter((movie) => movie.imdbID !== object.imdbID);

        setMyMovies(updatedMovies);
    }

    function handleNameChange(name) {
        setName(name);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=${process.env.REACT_APP_API_KEY}`);
                const data = await response.json();
                setError("");
                setMovies(data.Search);
            } catch (error) {
                setError("Cannot Fetch Movies");
            }
        };

        fetchData();
    }, [name]);

    useEffect(() => {
        setShowError(!!error);
    }, [error]);


    const contextValues = {
        movies,
        name,
        error,
        showError,
        myMovies,
        handleOnAddToWatchList,
        handleRemoveFromWatchList,
        handleNameChange,
    };

    return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export default AppContext;
