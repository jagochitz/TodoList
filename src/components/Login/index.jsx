import { Input, Button, ButtonMain, Main, Paragraph, Link } from "../../style";

function Login({
  handleLogin,
  loginTodo,
  setLoginTodo,
  userNames,
  userNameInput,
  setUserNameInput,
  setUserOnLine,
  usersPass,
  userNameLoginPass,
  setUserNameLoginPass,
}) {
  function handleLoginTodo() {
    setUserNameInput(userNameInput);
    setUserNameLoginPass(userNameLoginPass);
    [userNames].find((item) => item === userNameInput) &&
    [usersPass].find((item) => item === userNameLoginPass)
      ? setLoginTodo(!loginTodo)
      : alert("usuário ou senha inválidos");
    setUserOnLine(userNameInput);
  }
  return (
    <Main>
      <Input
        placeholder="Username"
        type="text"
        value={userNameInput}
        onChange={(e) => setUserNameInput(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={userNameLoginPass}
        onChange={(e) => setUserNameLoginPass(e.target.value)}
      />
      <ButtonMain>
        <Button onClick={handleLoginTodo}>login</Button>
        <Button onClick={handleLogin}>Voltar</Button>
      </ButtonMain>
      <Paragraph>
        Ainda não é cadastrado? Clique <Link>aqui</Link>
      </Paragraph>
    </Main>
  );
}

export default Login;
