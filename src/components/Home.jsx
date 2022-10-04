import { Link } from "react-router-dom";
import "../css/Home.css";
function Home() {
  return (
    <div className="home__container">
      <h1>Bienvenidos al listado de las últimas películas</h1>
      <Link to="/login">
        <p>Ingresar para ver el listado de las ultimas películas</p>
      </Link>
    </div>
  );
}

export default Home;
