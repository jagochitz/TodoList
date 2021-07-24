import { Content, Background, Container, AnimationContainer } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link, Redirect, useHistory } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiSmile,
  FiPhone,
  FiCpu,
} from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function Signup({ authenticated }) {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não correspondem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {};

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              icon={FiUser}
              name="name"
              label="Nome"
              placeholder="Seu nome completo"
              register={register}
              error={errors.name?.message}
            />
            <Input
              icon={FiMail}
              name="email"
              label="Email"
              placeholder="Seu melhor Email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              label="Senha"
              placeholder="Uma senha bem segura"
              register={register}
              error={errors.password?.message}
            />
            <Input
              icon={FiLock}
              name="passwordConfirm"
              type="password"
              label="Confirmação da senha"
              placeholder="Confirmação da senha"
              register={register}
              error={errors.passwordConfirm?.message}
            />
            <Button>Enviar</Button>
            <p>
              Já tem uma conta? Faça seu <Link to="/login">login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Signup;
