import Input from "../../components/Input";
import Button from "../../components/Button";
import { FiLock, FiMail } from "react-icons/fi";
import { Content } from "./styles";

function Login() {
  return (
    <Content>
      <h1>Entrar</h1>
      <Input label="E-mail" icon={FiMail} placeholder="Email Cadastrado" />
      <Input label="Senha" icon={FiLock} placeholder="Senha" type="password" />
      <Button>Entrar</Button>
    </Content>
  );
}

export default Login;
