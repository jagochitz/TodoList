import { useForm } from "react-hook-form";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link, Redirect, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Content } from "../Login/styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function Signup({ authenticated }) {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve conter ao menos 8 dígitos")
      .required("Campo obrigatório"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem coincidir")
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

  const onSubmitFunction = ({ name, email, password }) => {
    const user = { name, email, password };
    api
      .post("/user/register", user)
      .then((res) => {
        history.push("/login");
        toast.success("Cadastro realizado com sucesso");
      })
      .catch((res) => {
        toast.error("email ou usuário já existentes");
      });
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Cadastro</h1>
          <Input
            label="Nome"
            icon={FiUser}
            placeholder="Qual o seu nome completo?"
            register={register}
            name="name"
            error={errors.name?.message}
          />
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
          <Input
            label="Confirmação de Senha"
            icon={FiLock}
            placeholder="Confirme a senha"
            register={register}
            name="passwordConfirm"
            error={errors.passwordConfirm?.message}
          />
          <Button type="submit">Cadastrar</Button>
          <p>
            Já tem uma conta? Faça <Link to="/login">login</Link>
          </p>
        </form>
      </Content>
    </motion.div>
  );
}

export default Signup;
