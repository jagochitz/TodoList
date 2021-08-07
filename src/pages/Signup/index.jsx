import { FiLock, FiMail, FiUser } from "react-icons/fi";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Content } from "../Login/styles";

function Signup() {
  return (
    <Content>
      <h1>Cadastro</h1>
      <Input
        label="Nome"
        icon={FiUser}
        placeholder="Qual o seu nome completo?"
      />
      <Input label="Email" icon={FiMail} placeholder="Seu melhor email?" />
      <Input label="Senha" icon={FiLock} placeholder="Uma senha bem Forte" />
      <Input
        label="Confirmação de Senha"
        icon={FiLock}
        placeholder="Confirme a senha"
      />
      <Button>Cadastrar</Button>
    </Content>
  );
}

export default Signup;
