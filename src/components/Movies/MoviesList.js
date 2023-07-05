import List from "../Layouts/List";
import ListItems from "../Layouts/ListItems";

function MoviesList({movies,onAdd}) {
    return(
        <List>
            <ListItems movies={movies} onAdd={onAdd}/>
        </List>
    );
}

export default MoviesList;