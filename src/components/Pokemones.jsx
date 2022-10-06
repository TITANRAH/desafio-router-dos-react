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

  useEffect(() => {
    if (nombre !== undefined && nombre && nombre !== "") {
      async function getPokemon() {
        const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
        const url = `${baseUrl}${nombre}`;
        const resultado = await axios(url);

        setNombrePokemon(resultado.data.name);
        setImagenes(resultado.data.sprites);
        setStats(resultado.data.stats);
        setTipos(resultado.data.types);
      }

      getPokemon();
    }
  }, [nombre]);

  return (
    <>
      {!nombre || nombre === "" ? (
        <div className="contenedor" id="contenedor-pokebola">
          {" "}
          <h5>Pulsa la pokebola para seleccionar un Pokemon</h5>{" "}
          <NavLink end to="/">
            <img className="pokebola" src={pokebola} alt="" />
          </NavLink>
        </div>
      ) : (
        <h2>
          <CardPokemon
            nombrePokemon={nombrePokemon}
            imagenes={imagenes}
            stats={stats}
            tipos={tipos}
          />
        </h2>
      )}
    </>
  );
}

export default Pokemones;
