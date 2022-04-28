import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, todoToogledComplete, setTodoEdit }) => {
  return (
    <div>
      <h2 className="text-center display-5">Soy TodoList</h2>

      {todos.length === 0 ? (
        <div className="alert alert-primary">
          No hay tareas. Por favor agrega una {":)"}
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            todoDelete={todoDelete}
            todoToogledComplete={todoToogledComplete}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </div>
  );
};
export default TodoList;
