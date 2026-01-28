import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar/Navbar";
import style from "./Main.Layout.module.scss";

export function Mainlayout() {
  const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "posters", path: "/posters" },
    { name: "contact", path: "/contact" },
    { name: "login", path: "/login" },
  ];

  return (
    <section className={style.pageContainer}>
      <Navbar logoNav="WALLYWOOD" linkNav={links} />
      <Outlet />
      <footer>Footer</footer>
    </section>
  );
}
