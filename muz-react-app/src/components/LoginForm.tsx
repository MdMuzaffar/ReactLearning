import { SyntheticEvent, useState } from "react";
import Button from "./Button";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [index, setIndex] = useState();

  const submitForm = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;
    console.log(target, { email, password });
    clearForm();
    // deleteItem(email);
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  // const deleteItem = (emails:any) => {
  //   const index = email.findIndex((ind) => ind.id === emails)
  //   if(index == -1){
  //     return;
  //   }
  //   email.slice(0,1);
  //   setEmail(email);
  // }

  // const delInd = (index:number) => {
  //   const indexFind = index.filter( ind => ind.id !== index)
  //   setIndex(indexFind);
  // }

  return (
    <form onSubmit={submitForm}>
      <input
        type="email"
        onChange={(ev) => {
          setEmail(ev.target.value);
        }}
        value={email}
        placeholder="Enter you email"
      ></input>
      <input
        onChange={(ev) => {
          setPassword(ev.target.value);
        }}
        type="password"
        value={password}
        placeholder="Enter you password"
      ></input>
      <Button text="Submit Form" />
    </form>
  );
};
