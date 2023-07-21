import React, { useContext } from "react";
import AppContext from "../../storage/app-context";


function Search() {
    const { handleNameChange, name } = useContext(AppContext);

    const handleInputChange = (e) => {
        handleNameChange(e.target.value);
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
