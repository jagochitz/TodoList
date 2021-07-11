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
    userNames.find((item) => item === userNameInput) &&
    usersPass.find((item) => item === userNameLoginPass)
      ? setLoginTodo(!loginTodo)
      : alert("usuário ou senha inválidos");
    setUserOnLine(userNameInput);
  }
  return (
    <>
      <input
        placeholder="Username"
        type="text"
        value={userNameInput}
        onChange={(e) => setUserNameInput(e.target.value)}
      />
      <input
        placeholder="Username"
        type="text"
        value={userNameLoginPass}
        onChange={(e) => setUserNameLoginPass(e.target.value)}
      />
      <button onClick={handleLoginTodo}>login</button>
      <button onClick={handleLogin}>Voltar</button>
    </>
  );
}

export default Login;
