import Search from "./Search";
import NavItems from "./NavItems";
import Nav from "../Layouts/Nav";

function Navbar () {
    return (
        <>
            <Nav>
                <NavItems>
                    <Search/>
                </NavItems>
            </Nav>
        </>
    );
}

export default Navbar;