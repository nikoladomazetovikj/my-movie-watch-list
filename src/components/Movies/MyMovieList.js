import Row from "../Layouts/Row";
import Column from "../Layouts/Column";
import {Button} from "react-bootstrap";

function MyMovieList({myMovies, onRemove}) {
    return (
        <>
            <Row>
                <h6>My List</h6>
                <hr/>
                <Column colType="6 col-md-6 col-6">
                    <h6>Results</h6>
                </Column>
                <Column colType="6 col-md-6 col-6">
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
                        <Column colType="3 col-md-6">
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                width="100"
                                height="150"
                            />
                        </Column>
                        <Column colType="9 col-md-6">
                            <Row>
                                <Column colType='9 col-md-6 col-md-6 overflow-auto'>
                                    <h5 className="mb-1">{movie.Title}</h5>
                                    <p>Year: {movie.Year}</p>
                                    <p>Type: {movie.Type}</p>
                                </Column>
                                <Column colType='3 col-md-6'>
                                    <Button variant='outline-secondary' type="button" onClick={() => onRemove(movie)}>X</Button>
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                </a>
            ))}
           </>
    );
}

export default MyMovieList;