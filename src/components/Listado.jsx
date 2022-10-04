import Deslogear from "./Deslogear";
import { API_URL, IMAGE_URL } from "../services/api";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "../css/Listado.css";

function Listado() {
  const [peliculas, setPeliculas] = useState([]);

  const peliculasData = async () => {
    try {
      const response = await axios.get(API_URL);
      setPeliculas(response.data.results);
    } catch (e) {
      Swal.fire(`Algo salio mal!!!!`);
    }
  };
  console.log(peliculas);
  useEffect(() => {
    peliculasData();
  }, []);
  return (
    <>
      <Deslogear />
      <div className="row">
        {peliculas?.map((pelicula, i) => {
          return (
            <div className="col-md-3 mb-4" key={i}>
              <div className="card">
                <img
                  src={`${IMAGE_URL}${pelicula.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body card__body-info">
                  <div>
                    <h5 className="card-title card__title-color">
                      {pelicula.original_title}
                    </h5>
                    <p className="card-text card__text-color">
                      {pelicula.overview.substring(0, 50)}...
                    </p>
                  </div>
                  <Link
                    to={`/detalle?movieID=${pelicula.id}`}
                    className="btn btn-primary"
                  >
                    Ver pelicula
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Listado;
