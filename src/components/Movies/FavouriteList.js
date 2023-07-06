import List from "../Layouts/List";
import ListItems from "../Layouts/ListItems";
import MyMovieList from "./MyMovieList";

function FavouriteList({myMovies}) {
    return(
        <List>
            <MyMovieList myMovies={myMovies} />
        </List>
    );
}

export default FavouriteList;