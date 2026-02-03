import { NavLink } from "react-router";
import style from "./Navbar.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

interface NavbarProps {
  logoNav: string;
  linkNav: Array<{ name: string; path: string }>;
}

export function Navbar(props: NavbarProps) {
  const { logoNav, linkNav } = props;
  const { userData, logout } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={style.navbarStyle + " " + (darkMode ? style.dark : style.light)}>
      <h3>{logoNav}</h3>
      <ul>
        {linkNav.map((item) => {
          return item.name === "login" && userData ? (
            <li onClick={logout}>LOGOUT</li>
          ) : (
            <li key={item.path}>
              <NavLink to={item.path}>{item.name.toUpperCase()}</NavLink>
            </li>
          );
        })}
        <li>
          <button onClick={toggleTheme}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
        </li>
      </ul>
    </nav>
  );
}
