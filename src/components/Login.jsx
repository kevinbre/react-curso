import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthProvider";
import "../css/Login.css";
function Login() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //eslint-disable-line
    if (email === `` || password === ``) {
      Swal.fire("Asegurate de que los campos esten rellenos");
      return;
    }
    if (email !== `` && !regexEmail.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingresa una direccion de correo electronico valida",
      });
      return;
    }
    if (email !== `challenge@alkemy.org` || password !== `react`) {
      Swal.fire("Credenciales invalidas");
      return;
    }

    Swal.fire("Listos para continuar");
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        const tokenRecibido = res.data.token;
        localStorage.setItem("token", tokenRecibido);
        navigate("/listado");
        setAuth({ tokenRecibido });
      });

    return;
  };
  return (
    <>
      <div className="login__container login__container--gradiant-purple">
        <h2>Iniciar sesion</h2>
        <form className="login__form" onSubmit={submitHandler}>
          <label htmlFor="email">email</label>
          <input type="text" name="email" />
          <label htmlFor="password">password</label>
          <input type="password" name="password" />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </>
  );
}
export default Login;
