import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/TodoForm";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const initialState = () => {
    const almacenados = localStorage.getItem("todos");
    return almacenados ? JSON.parse(almacenados) : [];
  };
  const [todos, setTodos] = useState<Todo[]>(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (tarea: string) => {
    const todo: Todo = {
      id: Date.now(),
      text: tarea,
      completed: false,
    };
    setTodos([...todos, todo]);
  };

  const handleClick = (id: Todo["id"]) => {
    setTodos(todos.filter((tarea) => tarea.id !== id));
  };

  const toggleTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className=" flex-grow w-full md:w-4/5 lg:w-1/2 mx-auto p-5 space-y-10">
          <Form addTodo={addTodo} />

          <div className="flex justify-between bg-white shadow-lg rounded-lg p-5 text-gray-700">
            <p>Total: {todos.length}</p>
            <p>Completadas: {todos.filter((todo) => todo.completed).length}</p>
            <p>Pendientes: {todos.filter((todo) => !todo.completed).length}</p>
          </div>

          {/* Seccion tareas */}
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between place-items-center bg-white shadow-lg rounded-lg p-5"
            >
              <button onClick={() => toggleTodo(todo.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill={todo.completed ? "#3AE019" : "#BCBFBB"}
                >
                  <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              </button>

              <p
                className={`mr-auto p-3 ${
                  todo.completed ? "line-through text-gray-400" : ""
                } `}
              >
                {todo.text}
              </p>
              <button
                onClick={() => handleClick(todo.id)}
                className=" text-red-500 p-2 uppercase font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#E80C0C"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            </div>
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
