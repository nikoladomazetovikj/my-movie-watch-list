function Search({ onSubmit, onNameChange, name }) {
    const handleInputChange = (e) => {
        onNameChange(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleInputChange}
                value={name}
            />
            <button className="btn btn-outline-primary text-white" type="submit">
                Search
            </button>
        </form>
    );
}

export default Search;
