/*
 *Parei conseguindo verificar e printar usuário cadastrado e
  usuário logado, porém ao cadastrar mais de um usuário,
  não está adicionando no array de usuários já cadastrados 
 */

import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  /*
   * States
   */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginTodo, setLoginTodo] = useState(false);
  const [signupTodo, setSignupTodo] = useState(false);
  const [userNames, setUserNames] = useState([]);
  const [userNameInput, setUserNameInput] = useState("");
  const [userNameSign, setUserNameSign] = useState("");
  const [userNameSignPass, setUserNameSignPass] = useState("");
  const [usersPass, setUsersPass] = useState([]);
  const [userOnLine, setUserOnLine] = useState("");
  /*
   * States
   */
  /*--------------------------------------------------------------------- */
  /*
   * Handle Functions
   */
  // Toggle functions
  function handleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  function handleSignup() {
    setIsSignUp(!isSignUp);
  }

  function handleLogout() {
    setLoginTodo(false);
    setIsSignUp(false);
    setIsLoggedIn(false);
    setSignupTodo(false);
    setUserNameInput("");
    setUserNameSign("");
    setUserOnLine("");
  }

  // Toggle Functions

  /*
   * Handle Functions
   */

  return (
    <div className="App">
      <main>
        {loginTodo || signupTodo ? (
          <TodoList
            userNames={userNames}
            handleLogout={handleLogout}
            userOnLine={userOnLine}
          />
        ) : !isLoggedIn && !isSignUp ? (
          <>
            <section>
              <h2>Welcome to</h2>
              <h1>Bertoldo's Todo List</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                non tincidunt dui. Phasellus at neque augue. Fusce posuere, est
                lobortis sodales pellentesque, sapien risus egestas mi,
                ultricies cursus sapien neque eget lectus. Pellentesque non
                feugiat libero. Fusce eget nibh quis ipsum dignissim pharetra.
                Quisque ullamcorper rutrum ex, id lacinia augue ornare eu. Sed
                et orci efficitur, pretium orci id, varius dui. Integer nec
                lacinia lectus. Quisque ligula neque, sagittis id mauris eget,
                ultrices ullamcorper justo. Quisque elementum consequat velit,
                at pulvinar dui ultricies id. Nam hendrerit consequat ante.
              </p>
            </section>
            <section>
              <button onClick={handleLogin}>LogIn</button>
              <button onClick={handleSignup}>SignUp</button>
            </section>
          </>
        ) : isLoggedIn ? (
          <Login
            userNameInput={userNameInput}
            setUserNameInput={setUserNameInput}
            userNames={userNames}
            setUserNames={setUserNames}
            loginTodo={loginTodo}
            setLoginTodo={setLoginTodo}
            handleLogin={handleLogin}
            setUserOnLine={setUserOnLine}
          />
        ) : (
          <Signup
            setSignupTodo={setSignupTodo}
            signupTodo={signupTodo}
            userNameSignPass={userNameSignPass}
            setUserNameSignPass={setUserNameSignPass}
            userNameSign={userNameSign}
            setUserNameSign={setUserNameSign}
            handleSignup={handleSignup}
            userNames={userNames}
            setUserNames={setUserNames}
            usersPass={usersPass}
            setUsersPass={setUsersPass}
            setUserOnLine={setUserOnLine}
          />
        )}
      </main>
    </div>
  );
}

export default App;
