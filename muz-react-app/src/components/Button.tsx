import { FC } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  // children: String;
  // onClick: () => void;
  text: string;
};

const Button: FC<ButtonProps> = ({ text }) => {
  // if (!text) {
  //   text = "Submit";
  // }
  return <button className={styles.myButton}>{text}</button>;
};

export default Button;
