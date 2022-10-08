import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pokemones from "./components/Pokemones";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:nombre" element={<Pokemones />} />
          <Route path="*" element={<NotFound />} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
