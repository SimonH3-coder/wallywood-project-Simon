import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home/home";
import { Mainlayout } from "./layouts/Mainlayout";
import { Posters } from "./pages/posters/posters";
import { Login } from "./pages/login/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/poster" element={<Posters />} />
            <Route path="/contact" element={<div>Contact</div>} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
