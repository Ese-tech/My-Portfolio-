import { NavLink } from "react-router";
export function NavBar() {
  return (
    <nav className="flex  space-x-15 p-5 mb-3">
      <NavLink 
        to='/' 
        end 
        className={({ isActive }) =>
          isActive ? "text-green-500" : "text-black"
        }
      >
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