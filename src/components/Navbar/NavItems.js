
function NavItems({children}) {
   return (
          <div className="container-fluid">
              <a className="navbar-brand">My Movie Watch List</a>
              {children}
          </div>
   );
}


export default NavItems;