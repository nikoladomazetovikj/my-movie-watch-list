import { useEffect, useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import Row from "./Row";
import Column from "./Column";

function ListItems({ movies, onAdd }) {
    const [showModal, setShowModal] = useState(false);
    const [modalTarget, setModalTarget] = useState("");
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    `http://www.omdbapi.com/?i=${modalTarget}&apikey=${process.env.REACT_APP_API_KEY}`
                );
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
            setIsLoading(false);
        };

        fetchData();
    }, [modalTarget]);

    const toggleModal = (target) => {
        setShowModal(!showModal);
        setModalTarget(target);
    };

    const handleClose = () => setShowModal(false);

    function onHandleAdd(object) {
        onAdd(object);
        handleClose();
    }

    return (
        <>
            <Row>
                <Column colType="6 col-md-6">
                    <h6>Results</h6>
                </Column>
                <Column colType="6 col-md-6">
                    <h6 className="text-end">Found: {movies.length}</h6>
                </Column>
            </Row>
            {movies.map((movie) => (
                <a
                    key={movie.imdbID}
                    className="list-group-item list-group-item-action"
                    aria-current="true"
                    data-bs-target={"#" + movie.imdbID}
                    type="button"
                    onClick={() => toggleModal(movie.imdbID)}
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
                        <Column colType="9 col-md-6 overflow-auto">
                            <h5 className="mb-1">{movie.Title}</h5>
                            <p>Year: {movie.Year}</p>
                            <p>Type: {movie.Type}</p>
                        </Column>
                    </Row>
                </a>
            ))}
            <Modal
                show={showModal}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{movie.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isLoading ? (
                        <div className="d-flex justify-content-center align-items-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : (
                        <>
                            <Row>
                                <Column colType="6">
                                    <h6>Genre: {movie.Genre}</h6>
                                    <h6>Released: {movie.Released}</h6>
                                    <h6>Country: {movie.Country}</h6>
                                    <h6>Language: {movie.Language}</h6>
                                </Column>
                                <Column colType="6">
                                    <h6>Director: {movie.Director}</h6>
                                    <h6>Writer: {movie.Writer}</h6>
                                    <h6>Duration: {movie.Runtime}</h6>
                                    <h6>Rating: {movie.imdbRating}</h6>
                                </Column>
                            </Row>
                            <hr />
                            {movie.Plot}
                            <hr />
                            <h6>Actors: {movie.Actors}</h6>
                            <hr />
                            <h6>Awards: {movie.Awards}</h6>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => onHandleAdd(movie)}>
                        Add to Watch List
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ListItems;
