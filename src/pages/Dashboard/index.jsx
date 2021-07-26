import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import {
  InputContainer,
  Container,
  TasksContainer,
  Header,
  AnimationContainer,
  Background,
  Mask,
} from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Dashboard({ handleLogout, authenticated }) {
  const [tasks, setTasks] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@animeDoIt:token")) || ""
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem("@animeDoIt:user")) || ""
  );

  function loadTasks() {
    // api
    //   .get(`/users/${user.id}`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((resp) => setTechs(resp.data.techs))
    //   .catch((err) =>
    //     toast.error(
    //       "Verificar dados, Tecnologia já existente ou Nível inválido! Nível: Iniciante ou Intermediário ou Avançado"
    //     )
    //   );
  }

  const schema = yup.object().shape({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    loadTasks();
  });

  const onSubmit = (data) => {
    // api
    // .post("/users/techs", data, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    // .then((resp) => {
    //   toast.success("Tecnologia adicionada com sucesso");
    //   loadTechs();
    // })
    // .catch((err) =>
    //   toast.error(
    //     "Verificar dados, Tecnologia já existente ou Nível inválido! Nível: Iniciante ou Intermediário ou Avançado"
    //   )
    // );
  };

  const handleTasks = (key) => {
    const newTasks = tasks.filter((task) => task._id !== key);
    // api
    //   .delete(`/users/techs/${key}`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((resp) => {
    //     setTechs(newTechs);
    //     toast.success("Tecnologia removida com sucesso");
    //   })
    //   .catch((_) => toast.error("Tente Novamente"));
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Header>
        <h1>
          Bem vindo: <span>{user.name}</span>
        </h1>
        <Button onClick={handleLogout}>Sair</Button>
      </Header>
      <Background>
        <Mask>
          <InputContainer onSubmit={handleSubmit(onSubmit)}>
            <section>
              <Input
                name="name"
                register={register}
                placeholder="Nova Tarefa:"
                error={errors.name?.message}
              />
              <Button>Adicionar</Button>
            </section>
          </InputContainer>
          <TasksContainer>
            {[1, 2, 3, 4, 5, 6].map((task) => (
              <AnimationContainer>
                <Card
                  key={task._id}
                  id={task._id}
                  title={task.title}
                  handleTasks={handleTasks}
                />
              </AnimationContainer>
            ))}
          </TasksContainer>
        </Mask>
      </Background>
    </Container>
  );
}

export default Dashboard;
