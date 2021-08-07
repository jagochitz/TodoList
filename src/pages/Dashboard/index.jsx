import Button from "../../components/Button";
import Input from "../../components/Input";
import Card from "../../components/Card";
import { Container, InputContainer, TasksContainer } from "./styles";
import { FiEdit2 } from "react-icons/fi";

function Dashboard() {
  return (
    <Container>
      <InputContainer>
        <time>06 de agosto de 2021</time>
        <section>
          <Input icon={FiEdit2} placeholder="Nova tarefa" />
          <Button>Adicionar</Button>
        </section>
      </InputContainer>
      <TasksContainer>
        {[1, 2, 3].map((item) => (
          <Card title="Olá" date="6 de agosto de 2021" />
        ))}
      </TasksContainer>
    </Container>
  );
}

export default Dashboard;
