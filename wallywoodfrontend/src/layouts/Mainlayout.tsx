import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar/Navbar";
import style from "./Main.Layout.module.scss";
import { Footer } from "../components/Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { createRef, useEffect, useState } from "react";
import { ScrollBar } from "../components/ScrollBar/ScrollBar";

export function Mainlayout() {
  const { darkMode } = useContext(ThemeContext);

  // Lav en reference til et dom element (bindes til et element nede i HTML'en)
  const containerRef = createRef<HTMLDivElement>();

  // State til at gemme scroll percent
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    // Function der udrenger procent scrollet
    function scrollListener() {
      const scrollY = window.scrollY;

      if (!containerRef.current) return;
      else {
        const maxHeight = containerRef.current.getBoundingClientRect().height - window.innerHeight;

        const percent = Math.round((scrollY / maxHeight) * 100);

        setScrollPercent(percent);
      }
    }

    // Bind en "scroll" eventListener til browserens vindue
    window.addEventListener("scroll", scrollListener);

    // Slet event listener når vi "un-mounter"
    return () => window.removeEventListener("scroll", scrollListener);
  }, [containerRef]);

  const links = [
    { name: "home", path: "/" },
    { name: "plakater", path: "/poster" },
    { name: "om os", path: "/about" },
    { name: "kontakt", path: "/contact" },
    { name: "login", path: "/login" },
  ];

  return (
    <>
      {/* Her sættes ref på vores yderste container (da vi skal bruge højden af siden) og (dark og light mode funktion)*/}
      <section ref={containerRef} className={style.pageContainer + " " + (darkMode ? style.dark : style.light)}>
        <ScrollBar scrollPercent={scrollPercent} />
        <Navbar logoNav="WALLYWOOD" linkNav={links} />
        <Outlet />
        <Footer />
      </section>
    </>
  );
}
