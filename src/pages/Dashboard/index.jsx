import Button from "../../components/Button";
import Input from "../../components/Input";
import Card from "../../components/Card";
import { Container, InputContainer, TasksContainer } from "./styles";
import { FiEdit2 } from "react-icons/fi";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Dashboard({ authenticated, setAuthenticated }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [token] = useState(
    JSON.parse(localStorage.getItem("@todo-list:token")) || ""
  );
  const { register, handleSubmit } = useForm();

  function loadTasks() {
    api
      .get("/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      .then((res) => {
        const apiTasks = res.data.data.map((task) => ({
          ...task,
          createdAt: new Date(task.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        }));
        setTasks(apiTasks);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadTasks();
  });

  const onSubmit = ({ task }) => {
    console.log(task);
    if (!task) {
      return toast.error("Adicione uma tarefa");
    }

    api
      .post(
        "/task",
        {
          description: task,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setNewTask("");
        loadTasks();
      });
  };

  const handleCompleted = (id) => {
    const newTasks = tasks.filter((task) => task._id !== id);

    api
      .put(
        `/task/${id}`,
        { completed: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setTasks(newTasks));
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <InputContainer onSubmit={handleSubmit(onSubmit)}>
          <time>
            {new Date().toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
          <div>
            <Input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              icon={FiEdit2}
              placeholder="Nova tarefa"
              register={register}
              name="task"
            />
            <Button type="submit">Adicionar</Button>
          </div>
        </InputContainer>
        <TasksContainer>
          {tasks.map((task) => (
            <Card
              key={task._id}
              title={task.description}
              date={task.createdAt}
              onClick={() => handleCompleted(task._id)}
            />
          ))}
        </TasksContainer>
      </Container>
    </motion.div>
  );
}

export default Dashboard;
