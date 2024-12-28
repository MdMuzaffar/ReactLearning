import { createContext } from "react";
import { Todo } from "./components/types";

export interface IAppContexgt {
  note: Todo[];
  deleteNote: (todoId: number) => void;
}

export const AppContext = createContext<IAppContexgt>({
  note: [],
  deleteNote: () => {},
});
