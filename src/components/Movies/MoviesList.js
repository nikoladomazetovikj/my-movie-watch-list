import List from "../Layouts/List";
import ListItems from "../Layouts/ListItems";

function MoviesList({movies}) {
    return(
        <List>
            <ListItems movies={movies}/>
        </List>
    );
}

export default MoviesList;