import React, { useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import MoviesList from "./components/Movies/MoviesList";
import InitialScreen from "./components/Main/InitialScreen";
import Alert from "./components/Layouts/Alert";
import InitialScreenMyList from "./components/Main/InitialScreenMyList";
import FavouriteList from "./components/Movies/FavouriteList";
import AppContext from "./storage/app-context";


function App() {
    const ctx = useContext(AppContext);

    return (
        <>
            <Navbar />
            {ctx.showError && <Alert />}
            <Main>
                {ctx.movies && <MoviesList />}
                {!ctx.myMovies || ctx.myMovies.length === 0 ? <InitialScreenMyList /> : <FavouriteList />}
                {!ctx.movies && <InitialScreen />}
            </Main>
        </>
    );
}

export default App;
