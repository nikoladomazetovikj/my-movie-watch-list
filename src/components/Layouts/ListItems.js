import {useState} from "react";
import {Button, Modal} from 'react-bootstrap'

function ListItems({movies}) {

    const [showModal, setShowModal] = useState(false);
    const [modalTarget, setModalTarget] = useState('');

    const toggleModal = (target) => {
        setShowModal(!showModal);
        setModalTarget(target);
    };

    return (
       <>
           <h3>Search Movies</h3>
           {movies.map((movie) => (
               <a
                   key={movie.imdbID}
                   className="list-group-item list-group-item-action"
                   aria-current="true"
                   data-bs-target={"#" + movie.imdbID}
                   type='button'
                   onClick={() => toggleModal(movie.imdbID)}
               >
                       <div className="row ">
                           <div className="col-3">
                               <img src={movie.Poster} alt={movie.Title} width="100" height="150" />
                           </div>
                           <div className="col-9 ">
                               <h5 className="mb-1">{movie.Title}</h5>
                               <p>Year: {movie.Year}</p>
                               <p>Type: {movie.Type}</p>
                           </div>
                       </div>
               </a>
           ))}

           <Modal show={showModal} >
               <Modal.Header closeButton>
                   <Modal.Title>Modal heading</Modal.Title>
               </Modal.Header>
               <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
               <Modal.Footer>
                   <Button variant="secondary" >
                       Close
                   </Button>
                   <Button variant="primary" >
                       Save Changes
                   </Button>
               </Modal.Footer>
           </Modal>
       </>
    );
}

export default ListItems