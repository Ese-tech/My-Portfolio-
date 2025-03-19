import { NavLink } from "react-router";
export function NavBar() {
  return (
    <nav>
      <NavLink to='/' end>
        Home
      </NavLink>
      <NavLink to='/about-me' end>
        About Me
      </NavLink>
      <NavLink to='/my-projects' end>
        My Projects
      </NavLink>
      <NavLink to='/contact' end>
        Contact
      </NavLink>
      <NavLink to='/skills' end>
        Skills
      </NavLink>
    </nav>
  );
}