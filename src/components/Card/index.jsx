import { FiCalendar, FiClipboard } from "react-icons/fi";
import Button from "../../components/Button";
import { Container } from "./styles";

function Card({ title, date }) {
  return (
    <Container>
      <span>
        <FiClipboard />
        {title}
      </span>
      <hr />
      <time>
        <FiCalendar />
        {date}
      </time>
      <Button>Concluir</Button>
    </Container>
  );
}

export default Card;
