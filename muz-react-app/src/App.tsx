// import { useState, useEffect, useRef } from "react";
// import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";
// import Alert from "./components/alert";
// import GitHubUser from "./components/GitHubUser";
// import React, { useState, useEffect, useRef } from "react";

import { useEffect, useState } from "react";
import Button from "./components/Button";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import { LoginForm } from "./components/LoginForm";
import Todos from "./components/Todos";
import WelcomeMessage from "./components/WelcomeMessage";
import PostPage from "./PostPage";
import { getTodos } from "./API/Todos/Todos-api";
import { Todo } from "./components/types";
import { AppContext } from "./AppContext";
import useFetch from "./hooks/useFetch";
import Home from "./components/Home";
import HomeContaier from "./Container/HomeContaier";

function App() {
  //   return (
  //     <div>
  //       <h1>{name}</h1>
  //       <h1>{title}</h1>
  //     </div>
  //   );
  // }

  // function App() {
  //   let items = ["New York", "Tokiya", "London", "Paris"];

  //   const [alertVisible, setAlertvisible] = useState(false);
  //   const [inputValue, setInputValue] = useState("");
  //   const renderCount = useRef(0);

  // useEffect(() => {
  //   renderCount.current += 1;
  // });

  // const handleSelectItem = (item: String) => {
  //   console.log(item);
  // };

  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/moonhighway`)
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);
  // if (data)

  const { data, loading } = useFetch<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const [todos, setTodos] = useState<Todo[]>([]);
  const [finishedCount, setFinishedCount] = useState(0);
  useEffect(() => {
    getTodos().then((todosFromServer) => {
      console.log(todosFromServer);
      setTodos(todosFromServer);
      setTimeout(() => {
        setTodos((todos) => {
          return todos.map((item, index) => {
            if (index === 0) {
              return {
                ...item,
                completed: true,
              };
            }
            return item;
          });
        });
      }, 6000);
    });
  }, []);

  useEffect(() => {
    const count = todos.filter((todo) => todo.completed).length;
    setFinishedCount(count);
  }, [todos]);

  const deleteNote = (noteId: number) => {
    setTodos(
      todos.filter((noteItem) => {
        return noteItem.id !== noteId;
      })
    );
  };

  if (loading) {
    return <h1> Loading ........... </h1>;
  }

  return (
    // <div>
    //   <div>
    //     <GitHubUser
    //       name={data?.name}
    //       location={data?.location}
    //       avatar={data?.avatar_url}
    //       createdDate={data?.created_at}
    //       updatedDate={data?.updated_at}
    //       bio={data?.bio}
    //     />
    //   </div>

    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    //   {alertVisible && <Alert onClose={() => setAlertvisible(false)}></Alert>}
    //   <Button onClick={() => setAlertvisible(true)}> My Button </Button>
    //   <div>
    //     <input
    //       type="text"
    //       value={inputValue}
    //       onChange={(e) => setInputValue(e.target.value)}
    //     />
    //     <h1>Render Count: {renderCount.current}</h1>
    //   </div>
    // </div>
    <>
      <HomeContaier />
      <Home />

      {/* <AppContext.Provider
        value={{
          note: data ? data : [],
          deleteNote,
        }}
      > */}
      {/* <p>
        Set Finished Count = <span>{finishedCount}</span>
      </p>
      <Todos deletNote={deleteNote} todosArray={todos} /> */}
      {/* <PostPage />
      <WelcomeMessage
        user={{ name: "Muzaffar Ahmed", role: "moderator" }}
        isLoggedIn={true}
      /> */}
      {/* <LoginForm /> */}
      {/* <h1>Hello React Testing</h1> */}
      {/* <Button text="Home" />
      <Button text="About Us" />
      <Button text="Contact US" />
      <Button text="Services" />
      <Counter />
      <Cart /> */}
      {/* </AppContext.Provider> */}
    </>
  );
}

export default App;
