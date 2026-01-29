import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar/Navbar";
import style from "./Main.Layout.module.scss";
import { Footer } from "../components/Footer/Footer";

export function Mainlayout() {
  const links = [
    { name: "home", path: "/" },
    { name: "plakater", path: "/poster" },
    { name: "om os", path: "/about" },
    { name: "kontakt", path: "/contact" },
    { name: "login", path: "/login" },
  ];

  return (
    <section className={style.pageContainer}>
      <Navbar logoNav="WALLYWOOD" linkNav={links} />
      <Outlet />
      <Footer />
    </section>
  );
}
