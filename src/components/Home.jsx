import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [nombres, setNombres] = useState([]);
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    async function getNamePokemon() {
      const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
      const queryParams = "?limit=20";
      const url = `${baseUrl}${queryParams}`;
      const resultado = await axios(url);

      if (resultado.data.results !== []) {
        setNombres(resultado.data.results);
      }
    }

    getNamePokemon();
  }, []);

  const irApokemon = () => {
    navigate(`/pokemon/${nombre}`);
  };

  return (
    <>
      <div className="container-fluid contenedor">
        <div className="home">
          <div>
            <h5 className="titulo">Selecciona a un Pokemón</h5>
          </div>
          <div className="select">
            <select
              className="form-control"
              name="pets"
              id="pet-select"
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            >
              <option className="text-center" value="">
                {" "}
                --Pokemones--
              </option>

              {nombres.map((x) => (
                <option className="text-center" key={x.name} value={x.name}>
                  {x.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button className="btn btn-dark" onClick={irApokemon}>
              Ver Detalle
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
