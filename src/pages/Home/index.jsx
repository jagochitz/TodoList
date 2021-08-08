import { Redirect, useHistory } from "react-router-dom";
import tasksImage from "../../assets/add-tasks.png";
import checkListImage from "../../assets/check-list.png";
import Button from "../../components/Button";
import { Container, ContentContainer, TitleContent } from "./styles";
import { motion } from "framer-motion";

function Home({ authenticated }) {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
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
      <Container>
        <TitleContent>
          <h1>
            do<span>.</span>it yourself
          </h1>
          <img src={tasksImage} alt="tasksImg" />
        </TitleContent>
        <ContentContainer>
          <img src={checkListImage} alt="checkListImg" />
          <div>
            <p>Uma maneira fácil de organizar e planejar o seu dia-a-dia</p>
            <Button onClick={() => handleNavigation("/signup")}>
              Cadastre-se
            </Button>
            <Button onClick={() => handleNavigation("/login")}>Entrar</Button>
          </div>
        </ContentContainer>
      </Container>
    </motion.div>
  );
}

export default Home;
