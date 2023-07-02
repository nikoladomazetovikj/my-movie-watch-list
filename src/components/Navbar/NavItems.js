
function NavItems({children}) {
   return (
       <nav className="navbar bg-body-tertiary">
           <div className="container-fluid">
               <a className="navbar-brand">My Movie Watch List</a>
               {children}
           </div>
       </nav>
   );
}


export default NavItems;