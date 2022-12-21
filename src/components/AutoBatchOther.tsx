import { useState } from "react";
import { Todo } from "../type/Todo";

export const AutoBatchOther = () => {
  // stateを更新する回数と同じ回数だけレンダリングされる
  console.log("AutoBatchOther");

  const [todos, setTodos] = useState<null | Todo[]>(null);
  const [isFinishApi, setIsFinishApi] = useState<boolean>(false);
  const [state3, setState3] = useState("");

  const onClickExecuteApi = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsFinishApi(true);
        setState3("updated!!");
      });
  };
  return (
    <div>
      <p>Automatic Batchingの確認用（その他）</p>
      <button onClick={onClickExecuteApi}>API実行！</button>
      <p>isFinishApi: {isFinishApi ? "true" : "false"}</p>
      {todos?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};
