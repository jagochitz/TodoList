import { Container } from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiLogIn, FiLogOut, FiPlus } from "react-icons/fi";

export default function Menu({ authenticated }) {
  const user = JSON.parse(localStorage.getItem("@todo-list:user"));

  return (
    <Container>
      {!authenticated ? (
        <>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div>
            <Link to="/signup">
              <FiPlus size={32} />
              <span>Cadastre-se</span>
            </Link>
            <Link to="/login">
              <FiLogIn size={32} />
              <span>Entrar</span>
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <span>{user && user.name}</span>
          <div>
            <Link to="/login">
              <FiLogOut size={32} />
              <span>Sair</span>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
}
