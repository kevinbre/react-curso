import axios from "axios";
import { useEffect, useState } from "react";

function Detalle() {
  const [rick, setRick] = useState([]);
  const [paginado, setPaginado] = useState(0);
  console.log(rick);

  const getData = async () => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${paginado}`
    );

    setRick(response.data.results);
  };

  const siguiente = () => {
    const pagina = paginado + 1;
    setPaginado(pagina);
  };

  const anterior = () => {
    const pagina = paginado - 1;
    setPaginado(pagina);
  };

  useEffect(() => {
    getData();
  }, []); //eslint-disable-line

  return (
    <>
      <h2>Test Rick and Morty</h2>;
      {rick.map((oneRick) => {
        return (
          <div key={oneRick.id}>
            <div>
              {" "}
              <img src={oneRick.image} alt={oneRick.name} />
              <h1>Nombre del personaje: {oneRick.name}</h1>
            </div>
          </div>
        );
      })}
      <button onClick={anterior}>Anterior</button>
      <button onClick={siguiente}>Siguiente</button>
    </>
  );
}

export default Detalle;
