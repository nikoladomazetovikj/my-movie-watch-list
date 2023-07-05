import Row from "../Layouts/Row";
import Column from "../Layouts/Column";

function MyMovieList({myMovies}) {


    return (
        <>
            <h1>My List</h1>
            <Row>
                <Column colType="6">
                    <h6>Results</h6>
                </Column>
                <Column colType="6">
                    <h6 className="text-end">Found: {myMovies.length}</h6>
                </Column>
            </Row>
            {myMovies.map((movie) => (
                <a
                    key={movie.imdbID}
                    className="list-group-item list-group-item-action"
                    aria-current="true"
                    data-bs-target={"#" + movie.imdbID}
                    type="button"
                >
                    <Row>
                        <Column colType="3">
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                width="100"
                                height="150"
                            />
                        </Column>
                        <Column colType="9">
                            <h5 className="mb-1">{movie.Title}</h5>
                            <p>Year: {movie.Year}</p>
                            <p>Type: {movie.Type}</p>
                        </Column>
                    </Row>
                </a>
            ))}
           </>
    );
}

export default MyMovieList;