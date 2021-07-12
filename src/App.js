/*
 *Parei conseguindo verificar e printar múltiplos usuários cadastrados 
  porém ainda não consegui verificar as senhas de cada usário com o mesmo,
  preciso limpar os inputs de senha no handle logout
 */

import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import {
  HeaderMain,
  ButtonHeader,
  UserInfo,
  Main,
  Title,
  AppMain,
  SectionMain,
  Paragraph,
  Button,
} from "./style";
import logo from "./images/logo.png";

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
  const [userNameLoginPass, setUserNameLoginPass] = useState("");
  const [todoItens, setTodoItens] = useState([]);
  const [inputTodoValue, setInputTodoValue] = useState("");
  const [showMobile, setShowMobile] = useState(false);

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
    setShowMobile(false);
    setIsSignUp(false);
  }

  function handleSignup() {
    setIsSignUp(!isSignUp);
    setShowMobile(false);
    setIsLoggedIn(false);
  }

  function handleLogout() {
    setLoginTodo(false);
    setIsSignUp(false);
    setIsLoggedIn(false);
    setSignupTodo(false);
    setUserNameInput("");
    setUserNameSign("");
    setUserOnLine("");
    setUserNameLoginPass("");
    setUserNameSignPass("");
  }

  const handleTodo = (item) => {
    setTodoItens(todoItens.filter((filterItem) => filterItem !== item));
  };

  function handleMobile() {
    setShowMobile(!showMobile);
  }

  function handleShowHome() {
    setIsLoggedIn(false);
    setIsSignUp(false);
    setShowMobile(false);
  }

  // Toggle Functions

  /*
   * Handle Functions
   */

  /*
   * functional functions
   */

  const addTodo = (newTodo) => {
    if (inputTodoValue === "") {
      alert("Favor adicionar ao menos uma tarefa");
    }
    if (inputTodoValue !== "") {
      setTodoItens([...todoItens, newTodo]);
      setInputTodoValue("");
    }
  };

  /*
   * functional functions
   */

  return (
    <div className="mask">
      <Header
        handleMobile={handleMobile}
        showMobile={showMobile}
        setShowMobile={setShowMobile}
        handleSignup={handleSignup}
        handleLogin={handleLogin}
        handleShowHome={handleShowHome}
      >
        <UserInfo>
          <HeaderMain>
            <div>{userOnLine}</div>
            <ButtonHeader onClick={handleLogout}>logout</ButtonHeader>
          </HeaderMain>
        </UserInfo>
      </Header>
      <AppMain className="App">
        <Main>
          {loginTodo || signupTodo ? (
            <TodoList
              userNames={userNames}
              handleLogout={handleLogout}
              userOnLine={userOnLine}
              addTodo={addTodo}
              inputTodoValue={inputTodoValue}
              setInputTodoValue={setInputTodoValue}
              todoItens={todoItens}
              handleTodo={handleTodo}
            ></TodoList>
          ) : !isLoggedIn && !isSignUp ? (
            <>
              <SectionMain>
                <h2 className="sub-title">Welcome to</h2>
                <figure>
                  <img className="logo-main" src={logo} alt="logo" />
                </figure>
                <Title>Todo List</Title>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus non tincidunt dui. Phasellus at neque augue. Fusce
                  posuere, est lobortis sodales pellentesque, sapien risus
                  egestas mi, ultricies cursus sapien neque eget lectus.
                  Pellentesque non feugiat libero. Fusce eget nibh quis ipsum
                  dignissim pharetra. Quisque ullamcorper rutrum ex, id lacinia
                  augue ornare eu. Sed et orci efficitur, pretium orci id,
                  varius dui. Integer nec lacinia lectus. Quisque ligula neque,
                  sagittis id mauris eget, ultrices ullamcorper justo. Quisque
                  elementum consequat velit, at pulvinar dui ultricies id. Nam
                  hendrerit consequat ante.
                </Paragraph>
              </SectionMain>
              <section>
                <Button onClick={handleLogin}>LogIn</Button>
                <Button onClick={handleSignup}>SignUp</Button>
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
              usersPass={usersPass}
              userNameLoginPass={userNameLoginPass}
              setUserNameLoginPass={setUserNameLoginPass}
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
              userNameLoginPass={userNameLoginPass}
              setUserNameLoginPass={setUserNameLoginPass}
            />
          )}
        </Main>
      </AppMain>
    </div>
  );
}

export default App;
