import { useForm } from "react-hook-form";
import { FiLock, FiMail } from "react-icons/fi";
import { Link, Redirect, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Content } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().email("email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve conter ao menos 8 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/user/login", data)
      .then((res) => {
        const { token, user } = res.data;

        localStorage.setItem("@todo-list:token", JSON.stringify(token));
        localStorage.setItem("@todo-list:user", JSON.stringify(user));

        setAuthenticated(true);

        return history.push("/dashboard");
      })
      .catch((_) => toast.error("Verifique os dados e tente novamente"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Content>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Entrar</h1>
        <Input
          label="Email"
          icon={FiMail}
          placeholder="Seu melhor email?"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          icon={FiLock}
          placeholder="Uma senha bem Forte"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <Button type="submit">Entrar</Button>
        <p>
          Ainda não possui uma conta? Faça seu{" "}
          <Link to="/signup">cadastro</Link>
        </p>
      </form>
    </Content>
  );
}

export default Login;
