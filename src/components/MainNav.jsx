import { NavLink } from "react-router-dom";

const MainNav = () => {
  return(
    <nav className="mb-4">
    <ul className="nav nav-pills justify-content-center">
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/chi-siamo" className="nav-link">
          Chi siamo 
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/lista-post" className="nav-link">
          Lista Post
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}
export default MainNav