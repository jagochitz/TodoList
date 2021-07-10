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
    if (userNames.find((item) => item === userNameSign)) {
      alert("nome de usuário já cadastrado");
    } else {
      userNames.push(userNameSign);
    }
    setUsersPass([...usersPass, userNameSignPass]);
    setSignupTodo(!signupTodo);
    setUserOnLine(userNameSign);
  }
  return (
    <div>
      <input
        placeholder="Username"
        type="text"
        value={userNameSign}
        onChange={(e) => setUserNameSign(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={userNameSignPass}
        onChange={(e) => setUserNameSignPass(e.target.value)}
      />
      <button onClick={handleSignup}> homeSig</button>
      <button onClick={handleSignupTodo}>cadastrar</button>
    </div>
  );
}

export default Signup;
