import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pokemones from "./components/Pokemones";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemones />} />
          <Route path="/pokemon/:nombre" element={<Pokemones />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
