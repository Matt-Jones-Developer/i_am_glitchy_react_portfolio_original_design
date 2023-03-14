import { NavLink } from "react-router-dom";
import myCV from "../assets/pdf/Matt Jones C.V 2023 (Google Docs).pdf";

function NavTabs() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link:active" : "nav-link"
        }
        style={{ marginRight: ".5rem" }}
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? "nav-link:active" : "nav-link"
        }
        style={{ marginRight: ".5rem" }}
      >
        About
      </NavLink>
      <NavLink
        to="skills"
        className={({ isActive }) =>
          isActive ? "nav-link:active" : "nav-link"
        }
        style={{ marginRight: ".5rem" }}
      >
        Skills
      </NavLink>
      <NavLink
        to="projects"
        className={({ isActive }) =>
          isActive ? "nav-link:active" : "nav-link"
        }
        style={{ marginRight: ".5rem" }}
      >
        Projects
      </NavLink>
      <NavLink
        to="contact"
        end
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        style={{ marginRight: ".5rem" }}
      >
        Contact
      </NavLink>
      <NavLink
        to="cv"
        end
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        onClick={() => {
          window.open(`${myCV}`, "_blank");
          window.location.reload();
        }}
        rel="noreferrer"
        style={{ marginRight: "1rem" }}
      >
        CV
      </NavLink>
    </>
  );
}

export default NavTabs;
