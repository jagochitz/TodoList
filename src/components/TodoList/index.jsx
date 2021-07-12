import {
  Button,
  ButtonHeader,
  ButtonIcon,
  CheckBox,
  HeaderMain,
  Input,
  SectionMain,
  TodoContainer,
  TodoItem,
  TodoUserItem,
  UserInfo,
  TodoListMain,
  SubTitle,
  TodoListItem,
} from "../../style";
import { FaTrash } from "react-icons/fa";

function TodoList({
  handleLogout,
  userNames,
  userOnLine,
  addTodo,
  inputTodoValue,
  setInputTodoValue,
  todoItens,
  handleTodo,
}) {
  return (
    <SectionMain>
      <Input
        type="text"
        value={inputTodoValue}
        onChange={(e) => setInputTodoValue(e.target.value)}
      />
      <Button onClick={() => addTodo(inputTodoValue)}>add Todo</Button>
      <TodoListMain>
        <SubTitle>Lista de Tarefas:</SubTitle>
        {todoItens.map((item, index) => (
          <TodoListItem className="item" key={index}>
            <div>
              <CheckBox id="checkbox" type="checkbox" />
              <TodoContainer htmlFor="checkbox">
                <TodoUserItem>Responsável: {userOnLine}</TodoUserItem>
                <TodoItem>{item}</TodoItem>{" "}
              </TodoContainer>
              <ButtonIcon key={index} onClick={() => handleTodo(item)}>
                <FaTrash size={28} color="white" />
              </ButtonIcon>
            </div>
          </TodoListItem>
        ))}
      </TodoListMain>
      <Button onClick={handleLogout}>logout</Button>
    </SectionMain>
  );
}

export default TodoList;
