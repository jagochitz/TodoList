import { ButtonMain, Button, Input, SectionMain } from "../../style";

function Signup({
  handleSignup,
  userNameSignPass,
  setUserNameSignPass,
  userNameSign,
  setUserNameSign,
  setSignupTodo,
  signupTodo,
  userNames,
  setUserNames,
  usersPass,
  setUsersPass,
  setUserOnLine,
}) {
  function handleSignupTodo() {
    if ([userNames].find((item) => item.name === userNameSign)) {
      alert("nome de usuário já cadastrado");
    } else if (userNameSign === "" || userNameSignPass === "") {
      alert("usuário ou senha inválidos");
    } else {
      setUserNames([...[userNames], userNameSign]);
      setUsersPass([...[usersPass], userNameSignPass]);
      setSignupTodo(!signupTodo);
    }
    setUserOnLine(userNameSign);
  }
  return (
    <SectionMain>
      <Input
        placeholder="Username"
        type="text"
        value={userNameSign}
        onChange={(e) => setUserNameSign(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={userNameSignPass}
        onChange={(e) => setUserNameSignPass(e.target.value)}
      />
      <ButtonMain>
        <Button onClick={handleSignupTodo}>cadastrar</Button>
        <Button onClick={handleSignup}> voltar</Button>
      </ButtonMain>
    </SectionMain>
  );
}

export default Signup;
