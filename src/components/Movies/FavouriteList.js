import List from "../Layouts/List";
import ListItems from "../Layouts/ListItems";
import MyMovieList from "./MyMovieList";

function FavouriteList({myMovies, onRemove}) {
    return(
        <List>
            <MyMovieList myMovies={myMovies} onRemove={onRemove}/>
        </List>
    );
}

export default FavouriteList;