import { useState } from "react";
import Todos from "./Todos";

function App() {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos( (t) => [...t, "Yeni iş" + count] );
  };

  return (
    <>
      <Todos yapilacakIsler={todos} isEkle={addTodo} />
      <hr />
      <div>
        Sayaç: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );

}

export default App;
