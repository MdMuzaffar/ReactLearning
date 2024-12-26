import React, { FC, useState } from "react";
import { Todo } from "./types";

type TodosProps = {
  todosArray: Todo[];
};

const Todos: FC<TodosProps> = ({ todosArray }) => {
  //   const [todos, setTodos] = useState([
  //     { text: "pencil", id: 1 },
  //     { text: "pen", id: 2 },
  //     { text: "paper", id: 3 },
  //     { text: "sharpner", id: 4 },
  //     { text: "eraser", id: 5 },
  //   ]);

  //   const addNewTodos = () => {
  //     todos.unshift({
  //       text: "book",
  //       id: Date.now(),
  //     });
  //     setTodos(todos);
  //   };

  return (
    <>
      {/* <div> {todos.map((todo)=> {
    return(
        {todo}
    )
  })}</div>; */}
      {/* <button onClick={addNewTodos}></button> */}
      {/* {todos} */}
    </>
  );
};

export default Todos;
