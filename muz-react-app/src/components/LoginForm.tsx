import { SyntheticEvent, useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;
    console.log(target, { email, password });
  };
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
      <button>Sbmit</button>
    </form>
  );
};
