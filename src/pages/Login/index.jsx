import { Content, Background, Container, AnimationContainer } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function Login({ authenticated, setAuthenticated }) {
  const history = useHistory();
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitionFunction = (data) => {};
  //   api
  //     .post("/sessions", data)
  //     .then((res) => {
  //       const { token, user } = res.data;
  //       localStorage.setItem("@kenzieHub:token", JSON.stringify(token));
  //       localStorage.setItem("@kenzieHub:user", JSON.stringify(user));
  //       setAuthenticated(true);
  //       return history.push("/dashboard");
  //     })
  //     .catch((err) =>
  //       toast.error("Verifique suas informações e tente novamente")
  //     );
  // };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitionFunction)}>
            <h1>Login</h1>
            <Input
              name="email"
              register={register}
              label="Email"
              placeholder="Seu melhor email"
              error={errors.email?.message}
            />
            <Input
              name="password"
              register={register}
              label="Senha"
              placeholder="Digite a sua senha"
              type="password"
              error={errors.password?.message}
            />
            <Button type="submit">Entrar</Button>
            <p>
              Não tem uma conta? Faça seu <Link to="/signup">cadastro</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
