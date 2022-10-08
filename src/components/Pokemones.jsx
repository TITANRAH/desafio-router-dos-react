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
  const [pokemon, setPokemon] = useState([]);
  const [urlPokemon, setUrlPokemon] = useState("");
  const [fotoPokemon, setFotoPokemon] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
  );

  useEffect(() => {
    async function getPokemones() {
      const pokemonesResult = await axios("https://pokeapi.co/api/v2/pokemon");

      console.log("pokemonesResult", pokemonesResult.data.results);
      setPokemon(pokemonesResult.data.results);
    }

    getPokemones();
  }, []);

  useEffect(() => {
    if (nombre !== undefined && nombre && nombre !== "") {
      async function getPokemon() {
        try {
          const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
          const url = `${baseUrl}${nombre}`;
          const resultado = await axios(url);

          setVerdadero(false);
          setNombrePokemon(resultado.data.name);
          setImagenes(resultado.data.sprites.other.home);
          setStats(resultado.data.stats);
          setTipos(resultado.data.types);
        } catch (error) {
          setError(error.response.status);
        }
      }
      getPokemon();
    }
  }, [nombre]);

  useEffect(() => {
    if (urlPokemon !== "") {
      async function getFotoPokemon() {
        const resultado = await axios(urlPokemon);

        setFotoPokemon(resultado.data.sprites.other.home.front_default);
      }

      getFotoPokemon();
    }
  }, [urlPokemon]);

  return (
    <>
      {!nombre || nombre === "" || error === 404 ? (
        <div className="contenedor" id="contenedor-pokebola">
          <>
            <img className="fotoPokemon" src={fotoPokemon} alt="Pokemon !" />
            <div className="contenedor-pokemones">
              <div className="pokemones">
                {pokemon.map((pokemon) => (
                  <h5
                    key={pokemon.name}
                    onClick={() => setUrlPokemon(pokemon.url)}
                  >
                    {pokemon.name.toUpperCase()}
                  </h5>
                ))}
              </div>
            </div>
          </>

          <h6>ATRAPALO YA ! AQUÍ EN LA POKEBOLA</h6>
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
