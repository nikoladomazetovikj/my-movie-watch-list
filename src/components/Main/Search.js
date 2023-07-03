function Search({ onNameChange, name }) {
    const handleInputChange = (e) => {
        onNameChange(e.target.value);
    };


    return (
        <form className="d-flex" role="search" >
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleInputChange}
                value={name}
            />
        </form>
    );
}

export default Search;
