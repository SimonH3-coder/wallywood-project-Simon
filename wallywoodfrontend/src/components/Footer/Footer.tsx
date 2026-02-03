import style from "./Footer.module.scss";
// import { RiFacebookBoxFill } from "react-icons/ri";
// import { FaInstagram } from "react-icons/fa6";
// import { FaSquareTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className={style.footerStyle}>
      <section>
        <div>
          <h3>WALLYWOOD</h3>
          <p>Øster Uttrup Vej 1</p>
          <p>9000 Aalborg</p>
        </div>
        <div>
          <p>CVR: 123512512</p>
          <p>Mail: info@plakatshoppen.dk</p>
          <p>Mobil: +45 1232 2323</p>
        </div>
      </section>
      <section>
        {/* <RiFacebookBoxFill /> */}
        {/* <FaInstagram /> */}
        {/* <FaSquareTwitter /> */}
        <p>icon</p>
      </section>
    </footer>
  );
}
