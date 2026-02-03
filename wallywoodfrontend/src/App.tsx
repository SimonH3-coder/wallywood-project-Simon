import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home/home";
import { Mainlayout } from "./layouts/Mainlayout";
import { Posters } from "./pages/posters/posters";
import { Login } from "./pages/login/Login";
import { Details } from "./pages/details/Details";
import { Kontakt } from "./pages/kontakt/kontakt";
import { Omos } from "./pages/Omos/Omos";

function App() {
  // Details siden har fået et query param på. Dette gøres med /:slug på enden af en url.
  // Navigerer vi til /details/123 vil vores slug blive sat til 123.
  // Derfor kan vi nu sætte en slug i vores NavLinks path (eks. /details/masterminds).
  // og bruge useParams hooket til at trække slug (masterminds) ud inde i detalje siden.

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<Omos />} />
            <Route path="/poster" element={<Posters />} />
            <Route path="/poster/:slug" element={<Details />} />
            <Route path="/contact" element={<Kontakt />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
