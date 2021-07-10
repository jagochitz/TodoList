function Login({
  handleLogin,
  loginTodo,
  setLoginTodo,
  userNames,
  userNameInput,
  setUserNameInput,
  setUserOnLine,
}) {
  function handleLoginTodo() {
    setUserNameInput(userNameInput);
    userNames.find((item) => item === userNameInput)
      ? setLoginTodo(!loginTodo)
      : alert("usuario não encontrado");
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
      <input type="password" />
      <button onClick={handleLoginTodo}>login</button>
      <button onClick={handleLogin}>Voltar</button>
    </>
  );
}

export default Login;
