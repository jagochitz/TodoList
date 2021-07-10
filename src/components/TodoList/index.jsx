function TodoList({ handleLogout, userNames, userOnLine }) {
  return (
    <div>
      <div>{userOnLine}</div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default TodoList;
