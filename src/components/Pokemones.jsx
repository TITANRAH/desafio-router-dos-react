import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardPokemon from "./CardPokemon";
import { NavLink } from "react-router-dom";
import pokebola from "../assets/pokemon.png";

function Pokemones() {
  const { nombre } = useParams();

  const [nombrePokemon, setNombrePokemon] = useState("");
  const [imagenes, setImagenes] = useState({});
  const [stats, setStats] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [error, setError] = useState();
  const [verdadero, setVerdadero] = useState(true);

  useEffect(() => {
    if (nombre !== undefined && nombre && nombre !== "") {
      async function getPokemon() {
        try {
          const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
          const url = `${baseUrl}${nombre}`;
          const resultado = await axios(url);

          setVerdadero(false);
          setNombrePokemon(resultado.data.name);
          setImagenes(resultado.data.sprites);
          setStats(resultado.data.stats);
          setTipos(resultado.data.types);
        } catch (error) {
          setError(error.response.status);
        }
      }
      getPokemon();
    }
  }, [nombre]);

  return (
    <>
      {!nombre || nombre === "" || error === 404 ? (
        <div className="contenedor" id="contenedor-pokebola">
          <h6>
            No encontramos ningun Pokemón, pulsa la pokebola para volver a
            buscar
          </h6>
          <NavLink end to="/">
            <img className="pokebola" src={pokebola} alt="" />
          </NavLink>
        </div>
      ) : (
        <>
          {verdadero ? (
            <div className="contenedor">
              <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
              </div>
            </div>
          ) : (
            <CardPokemon
              nombrePokemon={nombrePokemon}
              imagenes={imagenes}
              stats={stats}
              tipos={tipos}
            />
          )}
        </>
      )}
    </>
  );
}

export default Pokemones;
