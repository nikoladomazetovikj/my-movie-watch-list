function ListItems({movies}) {
    return (
        <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <div className='row'>
                    <div className='col-3'>
                        <img src={movies.Poster} alt={movies.Title} width='100' height='150'/>
                    </div>
                    <div className='col-9'>
                        <h5 className="mb-1">{movies.Title}</h5>
                        <small>{movies.Released}</small>
                        <p className="mb-1">{movies.Plot}</p>
                        <small>Rating: {movies.imdbRating}</small>
                    </div>
                </div>
            </div>

        </a>
    );
}

export default ListItems