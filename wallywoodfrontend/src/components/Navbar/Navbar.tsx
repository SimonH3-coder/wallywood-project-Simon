import { NavLink } from "react-router";
import style from "./Navbar.module.scss";

interface NavbarProps {
  logoNav: string;
  linkNav: Array<{ name: string; path: string }>;
}

export function Navbar(props: NavbarProps) {
  const { logoNav, linkNav } = props;
  return (
    <nav className={style.navbarStyle}>
      <h3>{logoNav}</h3>
      <ul>
        {linkNav.map((item) => {
          return (
            <li key={item.name}>
              <NavLink to={item.path}>{item.name.toUpperCase()}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
