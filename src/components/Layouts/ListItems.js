import {useEffect, useState} from "react";
import { Button, Modal } from "react-bootstrap";
import Row from "./Row";
import Column from "./Column";

function ListItems({ movies }) {
    const [showModal, setShowModal] = useState(false);
    const [modalTarget, setModalTarget] = useState("");

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?i=${modalTarget}&apikey=${process.env.REACT_APP_API_KEY}`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchData();
    }, [modalTarget]);

    console.log(movie)

    const toggleModal = (target) => {
        setShowModal(!showModal);
        setModalTarget(target);
    };

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
           <Row>
               <Column colType='6'>
                   <h3>Search Movies</h3>
               </Column>
               <Column colType='6'>
                   <h3 className='text-end'>Found: {movies.length}</h3>
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
                        <Column colType='3'>
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                width="100"
                                height="150"
                            />
                        </Column>
                        <Column colType='9'>
                            <h5 className="mb-1">{movie.Title}</h5>
                            <p>Year: {movie.Year}</p>
                            <p>Type: {movie.Type}</p>
                        </Column>
                    </Row>

                </a>
            ))}

            <Modal show={showModal} onHide={handleClose} size="lg"
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {movie.Title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Column colType='6'>
                            <h6>Genre: {movie.Genre}</h6>
                            <h6>Released: {movie.Released}</h6>
                            <h6>Country: {movie.Country}</h6>
                            <h6>Language: {movie.Language}</h6>
                        </Column>
                        <Column colType='6'>
                            <h6>Director: {movie.Director}</h6>
                            <h6>Writer: {movie.Writer}</h6>
                            <h6>Duration: {movie.Runtime}</h6>
                            <h6>Rating: {movie.imdbRating}</h6>
                        </Column>
                    </Row>
                    <hr/>
                    {movie.Plot}
                    <hr/>
                    <h6>Actors: {movie.Actors}</h6>
                    <hr/>
                    <h6>Awards: {movie.Awards}</h6>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Add to Watch List
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ListItems;
