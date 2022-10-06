

function CardPokemon({ imagenes, nombrePokemon, stats, tipos }) {
  return (

    <>
    <div className="poke-seleccionado mt-5">
      <div>
        <div className="row">
          <div className="col-7">
            <img
              className="img-seleccionado"
              src={imagenes.front_default}
              alt=""
            />
          </div>

          <div className="col-5">
            <div>
              {" "}
              <h1>
                <b>{nombrePokemon}</b>
              </h1>{" "}
            </div>

            <ul>
              {stats.map((stat) => (
                <li key={stat.stat.name}>
                  <h4>
                    {stat.stat.name}: {stat.base_stat}
                  </h4>
                </li>
              ))}
            </ul>

            {tipos.map((tipo) => (
              <h3 className="tipo" key={tipo.type["name"]}>
                <b>{tipo.type["name"]}</b>
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default CardPokemon;
