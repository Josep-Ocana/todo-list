import type { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: Todo["id"]) => void;
  onDelete: (id: Todo["id"]) => void;
};

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="flex justify-between place-items-center bg-white shadow-lg rounded-lg p-1">
      <button onClick={() => onToggle(todo.id)}>
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
        onClick={() => onDelete(todo.id)}
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
  );
};

export default TodoItem;
